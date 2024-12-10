"use client";

import Category from "@/components/category";
import { useGetCategories } from "./api/get-categories";
import { Loader } from "@mantine/core";

function CategoriesPage() {
  const { data, isLoading } = useGetCategories();

  if (isLoading)
    return (
      <div className="flex">
        <Loader color="gray" size="xl" type="dots" className="mx-auto mt-12" />
      </div>
    );
  return (
    <>
      <Category categories={data} />
    </>
  );
}

export default CategoriesPage;
