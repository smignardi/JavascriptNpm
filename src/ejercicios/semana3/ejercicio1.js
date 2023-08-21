"use strict";

import { generarEnteroAleatorio } from "../../utilities/RandomUtilities.js";
import {
  generarArrayAleatorio,
  sumaArray,
  restaArrays,
  multiplicacionArrays,
} from "../../utilities/arrayUtilities.js";

const lengthArreglos = generarEnteroAleatorio(10, 20);
const array1 = generarArrayAleatorio(lengthArreglos, 100, 200);
const array2 = generarArrayAleatorio(lengthArreglos, 2, 6);

const sumaArr = sumaArray(array1, array2);
const restaArr = restaArrays(array1, array2);
const multiplicacionArr = multiplicacionArrays(array1, array2);

console.log(array1);
console.log(array2);
console.log(sumaArr);
console.log(restaArr);
console.log(multiplicacionArr);
