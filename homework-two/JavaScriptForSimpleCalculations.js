// Clothes Shopping and Bank Account JS
const priceShirt = 35;
const pricePants = 75;
const priceShoes = 60;
const priceJacket = 70;

let bankAccountBefore = 235.87;
let bankAccountAfter = bankAccountBefore - priceShirt - pricePants - priceShoes;

let bankAccountLast = (bankAccountAfter - priceJacket);
if (bankAccountLast >= 0) {
  console.log("True, you DO have enough funds to add the jacket");
  let addJacket = true;
//   document.getElementById("addJacket").innerText = "True";
} else {
  console.log("False, you do NOT have enough funds to add the jacket");
  let addJacket = false;
//   document.getElementById("addJacket").innerText = "False";
}
