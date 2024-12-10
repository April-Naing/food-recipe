"use client";
import { Card, Image, Button, SimpleGrid } from "@mantine/core";
import Link from "next/link";
import { IoLogoYoutube } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

function MealDetail({ data }) {
  const router = useRouter();
  const meal = data.meals[0];
  const ingredients = [];
  for (let i = 0; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  const handleClickBack = () => {
    router.back();
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="mx-auto my-6 w-2/3 text-slate-500 font-serif"
    >
      <div className="mb-6">
        <Button onClick={handleClickBack} color="gray">
          <FaArrowLeft size={20} />
        </Button>
        <h1 className="text-4xl text-center  font-serif">
          {meal.strMeal}({meal.strArea} Food)
        </h1>
      </div>
      <SimpleGrid cols={3} spacing="xl">
        <Card.Section>
          <Image
            src={`${meal.strMealThumb}`}
            height={160}
            w={300}
            alt="Norway"
            className="mt-6 ms-4"
          />
        </Card.Section>
        <div className="mx-auto">
          <h1 className="text-2xl">Ingredients</h1>
          <ul>
            {ingredients.length > 0 ? (
              ingredients.map((item, index) => (
                <li key={index}>{item.ingredient}</li>
              ))
            ) : (
              <p>There is error with this recipe.</p>
            )}
          </ul>
        </div>

        <div className="mx-auto">
          <h2 className="text-2xl">Measurement</h2>
          <ul>
            {ingredients.length > 0 ? (
              ingredients.map((item, index) => (
                <li key={index}>{item.measure}</li>
              ))
            ) : (
              <p>There is error with this recipe.</p>
            )}
          </ul>
        </div>
      </SimpleGrid>
      <div className="w-full mt-8">
        <h2 className="text-2xl">Instruction</h2>
        <p>{meal.strInstructions}</p>
      </div>
      <div>
        <Link
          href={`${meal.strYoutube}`}
          className="flex items-center gap-x-2 mt-4"
        >
          <IoLogoYoutube className="" fill="red" size={20} />
          Watch Video
        </Link>
      </div>
    </Card>
  );
}

export default MealDetail;
