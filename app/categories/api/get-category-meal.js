import { useQuery } from "@tanstack/react-query";

export const getCategoryMeal = async (category) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetched data.");
  }

  const data = await response.json();
  return data.meals;
};

export const useGetCategoryMeal = (category) => {
  return useQuery({
    queryKey: ["categoryMeal", category],
    queryFn: () => getCategoryMeal(category),
  });
};
