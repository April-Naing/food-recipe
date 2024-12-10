import { Inter } from "next/font/google";
import "./globals.css";
import NavLink from "@/components/nav-link";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import QueryProvider from "@/components/query-provider";

export const metadata = {
  title: "Tasty Receipe",
  description: "Get receipes for tasty foods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <QueryProvider>
          <MantineProvider>
            <nav>
              <ul className="flex justify-center list-none m-0 p-0">
                <NavLink href={"/"} name={"Home"} />
                <NavLink href={"/recipes"} name={"Recipes"} />
                <NavLink href={"/categories"} name={"Categories"} />
              </ul>
            </nav>
            {children}
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
