import { useQuery } from "@tanstack/react-query";

export async function getRecipes() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  const data = await response.json();
  return data.meals;
}

export const useGetRecipes = () => {
  return useQuery({
    queryKey: ["meal"],
    queryFn: getRecipes,
  });
};
