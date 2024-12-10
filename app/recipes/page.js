"use client";

import { useEffect, useState } from "react";
import Meal from "@/components/meal";
import SearchMeal from "@/components/search-meal";
import { useGetRecipes } from "./api/get-recipes";
import { useGetSearchMeal } from "./api/get-search-meal";
import { Loader, Text } from "@mantine/core";
import { useGetAreaMeal } from "./api/get-area-meal";

function RecipePage() {
  const [searchValue, setSearchValue] = useState("");
  const [searchArea, setSearchArea] = useState("");
  const { data: meals, isLoading, error } = useGetRecipes();

  const { data: searchMeal } = useGetSearchMeal(searchValue);

  useEffect(() => {
    if (searchValue.startsWith("area")) {
      const area = searchValue.replace("area", "");
      setSearchArea(area);
    }
  }, [searchValue]);

  const { data: areaMeal, isLoading: isGettingAreaMeal } =
    useGetAreaMeal(searchArea);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="">
      <SearchMeal setValue={setSearchValue} />
      {isLoading || isGettingAreaMeal ? (
        <div className="flex">
          <Loader
            color="gray"
            size="xl"
            type="dots"
            className="mx-auto mt-12"
          />
        </div>
      ) : (
        ""
      )}
      {!searchMeal && !areaMeal && !isLoading && !isGettingAreaMeal && (
        <Meal meals={meals} />
      )}
      {searchMeal && <Meal meals={searchMeal} />}
      {areaMeal && <Meal meals={areaMeal} />}
    </div>
  );
}

export default RecipePage;
