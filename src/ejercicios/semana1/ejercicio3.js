"user strict";

import { generarNumeroDecimalAleatorio } from "../../utilities/RandomUtilities.js";

const lado = generarNumeroDecimalAleatorio(5, 500).toFixed(1);

const calcularPerimetro = (lado) => (lado * 3).toFixed(1);

const calcularArea = (lado) =>
  ((Math.sqrt(3) / 4) * Math.pow(lado, 2)).toFixed(1);

const perimetro = calcularPerimetro(lado);
const area = calcularArea(lado);

const imprimirMensaje = (lado, perimetro, area) =>
  console.log(
    `El perímetro de un triángulo equilátero de lado ${lado} es ${perimetro}`
  );
console.log(`El área de un triángulo equilátero de lado ${lado} es ${area}`);

imprimirMensaje(lado, perimetro, area);
