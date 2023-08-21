"use strict";

import { bblSort } from "../../utilities/arrayUtilities.js";
import listaVideojuegos from "../../files/videojuegos.json" assert { type: "json" };

const ordenarArray = (arr) => {
  return listaVideojuegos.juegos.sort((a, b) => a.precio - b.precio);
};

const imprimirReporte = (lista) => {
  console.log(lista);
};

ordenarArray(listaVideojuegos);

imprimirReporte(listaVideojuegos);
