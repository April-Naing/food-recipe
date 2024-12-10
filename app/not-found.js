import { Button, Flex } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Flex
      className="font-serif text-slate-600"
      direction={"column"}
      align={"center"}
      gap={"sm"}
      pt={"xl"}
    >
      <h1 className="text-3xl">Oops...Page not Found.</h1>
      <p>Could not find requested resource.</p>
      <Button color="gray">
        <Link href="/">Return to home</Link>
      </Button>
    </Flex>
  );
}
