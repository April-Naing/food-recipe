import { useQuery } from "@tanstack/react-query";

export const getSearchMeal = async (searchMeal) => {
  const res = await fetch(
    // `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchMeal}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await res.json();
  return data.meals;
};

export const useGetSearchMeal = (searchMeal) => {
  return useQuery({
    queryKey: ["meals", searchMeal],
    queryFn: () => getSearchMeal(searchMeal),
    enabled: !!searchMeal,
  });
};
