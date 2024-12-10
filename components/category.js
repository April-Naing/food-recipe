import { Card, Image, SimpleGrid, Stack, Text } from "@mantine/core";

function Category({ categories }) {
  return (
    <Stack align="center" justify="center" gap="xl" className="my-8">
      {categories.map((category) => (
        <Card
          shadow="md"
          padding="xl"
          component="a"
          className="w-10/12 "
          href={`/categories/${category.strCategory}`}
          // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          // target="_blank"
          key={category.idCategory}
        >
          <SimpleGrid cols={2} spacing="xs">
            <Image
              src={`${category.strCategoryThumb}`}
              height={160}
              w={300}
              alt="Norway"
              className="mx-auto p-0 "
            />
            <div className="w-full">
              <h1 className="text-3xl  font-serif">{category.strCategory}</h1>
              <p className=" text-slate-600 text-xl mt-4 w-full font-serif">
                {category.strCategoryDescription}
              </p>
            </div>
          </SimpleGrid>
        </Card>
      ))}
    </Stack>
  );
}

export default Category;
