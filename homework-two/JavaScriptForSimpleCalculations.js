// Friend Dates and Movie Tickets JS
let ticketNumber = 3;
let ticketCosts = 14;
let ticketTotal = ticketNumber * ticketCosts;


// Clothes Shopping and Bank Account JS
const priceShirt = 35;
const pricePants = 75;
const priceShoes = 60;
const priceJacket = 70;

let bankAccountBefore = 235.87;
let bankAccountAfter = bankAccountBefore - priceShirt - pricePants - priceShoes;

let bankAccountLast = (bankAccountAfter - priceJacket);
let addJacket;
if (bankAccountLast >= 0) {
  console.log("True, you DO have enough funds to add the jacket");
  addJacket = true;
//   document.getElementById("addJacket").innerText = "True";
} else {
  console.log("False, you do NOT have enough funds to add the jacket");
  addJacket = false;
//   document.getElementById("addJacket").innerText = "False";
}


// Professor Rector and Pizzas JS
let pizzas = 4;
let studentNumberEatAverage = 2.5;
const slicePerPizza = 8;
let studentNumberTotalFeed = (pizzas * slicePerPizza) / studentNumberEatAverage;
// studentNumberTotalFeed = studentNumberTotalFeed % 0;
let professorRector = (pizzas * slicePerPizza) % studentNumberEatAverage;


// Monty's Mega Bar Bill JS
const costAdult = 12;
const costChild = 6;
const costDrinks = 1.50;
let buffetAdult = 2;
let buffetChild = 1;
let buffetDrinks = 3;

let barReceipt = (costAdult * buffetAdult) + (costChild * buffetChild) + (costDrinks * buffetDrinks);


// Enter Text into HTML
document.getElementById("ticketNum").innerText = "Tickets: " + ticketNumber;
document.getElementById("ticketCost").innerText = "Cost: $" + ticketCosts;
document.getElementById("ttCost").innerText = "Total: $" + ticketTotal;
document.getElementById("bank").innerText = "$" + bankAccountAfter;
document.getElementById("addJacket").innerText = "Add Jacket: " + addJacket;
document.getElementById("profPizza").innerText = "Students: " + studentNumberTotalFeed;
document.getElementById("profRector").innerText = "Rector: " + professorRector;
document.getElementById("Monty").innerText = "$" + barReceipt;

