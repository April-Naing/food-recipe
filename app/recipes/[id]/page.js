const { default: MealDetail } = require("@/components/meal-detail");

async function MealDetailPage({ params }) {
  const id = params.id;
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await response.json();
  return <MealDetail data={data} />;
}

export default MealDetailPage;
