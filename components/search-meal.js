"use client";
import { Input, rem } from "@mantine/core";
import { SlMagnifier } from "react-icons/sl";
import { Select } from "@mantine/core";
import { useState } from "react";

const areas = [
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Thai",
  "Tunisian",
  "Turkish",
  "Ukrainian",
  "Unknown",
  "Vietnamese",
];

function SearchMeal({ setValue }) {
  const icon = <SlMagnifier />;
  const [value, setvalue] = useState();
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelectChange = (val) => {
    setValue("area" + val);
  };

  return (
    <div className="my-4">
      <h1 className="mb-4 text-slate-500 text-3xl font-serif font-bold text-center">
        Search Recipe for your ingredient
      </h1>
      <div className="ms-2 flex gap-2 items-center justify-center ">
        <Input
          onChange={handleOnChange}
          className="w-1/3 "
          placeholder="Enter your main ingredient"
          rightSection={icon}
        />
        <Select
          clearable
          placeholder="Select traditional meals"
          data={areas}
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
}

export default SearchMeal;
