"use strict";

import listaNumeros from "../../files/listaNumbers.json" assert { type: "json" };

const calcularMediaArmonica = (lista) => {
  let acumulado = 0;
  for (let i = 0; i < lista.length; i++) {
    acumulado = acumulado + 1 / lista[i];
  }
  return lista.length / acumulado;
};

const imprimirMensaje = (valor) => {
  console.log(`Media Geometrica : ${valor}`);
};

imprimirMensaje(calcularMediaArmonica(listaNumeros));
