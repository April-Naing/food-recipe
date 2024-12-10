"use client";
import Meal from "@/components/meal";
import { useGetCategoryMeal } from "../api/get-category-meal";
import { Loader, Skeleton } from "@mantine/core";

function CategoryMealPage({ params }) {
  const category = params.id;
  const { data, isLoading } = useGetCategoryMeal(category);

  if (isLoading)
    return (
      <div className="flex">
        <Loader color="gray" size="xl" type="dots" className="mx-auto mt-12" />
      </div>
    );

  return <Meal meals={data} />;
}

export default CategoryMealPage;
