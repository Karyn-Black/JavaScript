// Clothes Shopping and Bank Account JS
const priceShirt = 35;
const pricePants = 75;
const priceShoes = 60;
const priceJacket = 70;

let bankAccountBefore = 235.87;
let bankAccountAfter = bankAccountBefore - priceShirt - pricePants - priceShoes;

let bankAccountLast = ((bankAccountAfter - priceJacket) >= 0);