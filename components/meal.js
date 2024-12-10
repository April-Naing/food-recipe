import { Card, Image, SimpleGrid, Text } from "@mantine/core";

function Meal({ meals }) {
  return (
    <SimpleGrid
      cols={{ base: 1, xs: 2, sm: 3, lg: 4 }}
      spacing="xl"
      verticalSpacing="xl"
      className="m-12 "
    >
      {meals?.map((meal) => (
        <Card
          shadow="sm"
          padding="xl"
          component="a"
          href={`/recipes/${meal.idMeal}`}
          // target="_blank"
          key={meal.idMeal}
        >
          <Card.Section>
            <Image src={`${meal.strMealThumb}`} h={280} alt="No way!" />
          </Card.Section>
          <h2 className=" text-slate-600 text-xl mt-4 text-center font-serif">
            {meal.strMeal}
          </h2>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default Meal;
