"use strict";

const priceWithIva = function (price) {
  const iva = price * 0.21;
  const price_iva = price + iva;
  return `Precio sin iva: ${price}, IVA: ${iva}, y Total: ${price_iva}`;
};

console.log(priceWithIva(20));
