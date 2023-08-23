"use strict";

import { generarEnteroAleatorio } from "../../utilities/randomUtilities.js";
import { generarArrayAleatorio } from "../../utilities/arrayUtilities.js";

const arrayLen = generarEnteroAleatorio(15, 20);
const arrayNumeros = generarArrayAleatorio(arrayLen, 100, 999);

console.log(arrayNumeros);

const calcularMediaGeometrica = (arr) => {
  let acumulado = 1;
  for (let i = 0; i < arrayLen; i++) {
    acumulado *= arr[i];
  }
  return Math.pow(acumulado, 1 / arrayLen).toFixed(5);
};

const imprimirMensaje = (mediaGeo) => {
  console.log(`${mediaGeo} es el resultado de la media geometrica`);
};

imprimirMensaje(calcularMediaGeometrica(arrayNumeros));
