// Script to use

import { names } from "./data/names.js";

names.forEach((name) => {
  console.log(
    `The name is ${name.value} and the lenght is ${name.getLength().value}.`
  );
});
