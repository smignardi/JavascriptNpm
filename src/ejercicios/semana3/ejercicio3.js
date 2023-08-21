"use strict";

import { generarEnteroAleatorio } from "../../utilities/RandomUtilities.js";
import { generarArrayAleatorio } from "../../utilities/arrayUtilities.js";
const lengthArray = generarEnteroAleatorio(20, 30);
const arrayNumeros = generarArrayAleatorio(lengthArray, 100, 1000);
const arrayPesos = generarArrayAleatorio(lengthArray, 1, 50);

const calcularPromedioPonderado = (a1, a2) => {
  let aux = 0;
  for (let i = 0; i < lengthArray; i++) {
    aux += a1[i] * a2[i];
  }
  return aux / lengthArray;
};

const imprimirMensaje = (array1, array2, pp) => {
  console.log(array1);
  console.log(array2);
  console.log(`Promedio ponderado: ${pp}`);
};

imprimirMensaje(
  arrayNumeros,
  arrayPesos,
  calcularPromedioPonderado(arrayNumeros, arrayPesos)
);
