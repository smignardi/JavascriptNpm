"use strict";

/**
 *
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
export function generarNumeroDecimalAleatorio(min, max) {
  return Math.random() * (max - min + 1) + min;
}

/**
 *
 * @param {*} min
 * @param {*} max
 * @returns
 */
export function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
