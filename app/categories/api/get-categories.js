import { useQuery } from "@tanstack/react-query";

export async function getCategories() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  const data = await response.json();
  return data.categories;
}

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
