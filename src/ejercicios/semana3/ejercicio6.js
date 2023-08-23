"use strict";

import { generarEnteroAleatorio } from "../../utilities/randomUtilities.js";
import { generarArrayAleatorio } from "../../utilities/arrayUtilities.js";

const arrayLen = generarEnteroAleatorio(15, 20);
const arrayNumeros = generarArrayAleatorio(arrayLen, 100, 999);

console.log(arrayNumeros);

const calcularMediaArmonica = (arr) => {
  let acumulado = 0;
  for (let i = 0; i < arrayLen; i++) {
    acumulado += Math.pow(arr[i], -1);
  }
  return (arrayLen / acumulado).toFixed(5);
};

const imprimirMensaje = (mediaArm) => {
  console.log(`${mediaArm} es el resultado de la media armonica`);
};

imprimirMensaje(calcularMediaArmonica(arrayNumeros));
