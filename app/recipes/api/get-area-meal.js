import { useQuery } from "@tanstack/react-query";

export const getAreaMeal = async (area) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch meal.");
  }
  const response = await res.json();
  return response.meals;
};

export const useGetAreaMeal = (area) => {
  return useQuery({
    queryKey: ["areaMeal", area],
    queryFn: () => getAreaMeal(area),
  });
};
