// JavaScript Document

const alias = ["Sun", "Sol", "Sól", "Helios", "ἥλιος", "Shamash", "Surya"];
const language = [
  "English",
  "Ancient Roman",
  "Latin",
  "Ancient Greek",
  "Greek Letters",
  "Sumerian",
  "Sanskrit",
];

let count = 0;

function changeName() {
  count++;
  if (count > 6) {
    count = 0;
  }
  document.getElementById("name1").innerHTML = alias[count];
  document.getElementById("language").innerHTML = language[count];
  document.getElementById("name2").innerHTML = alias[count];
}

document.getElementById("name1").addEventListener("onclick", changeName);

let slider = document.getElementById("myRange");
// let button = document.getElementById("button");
let output = document.getElementById("percentage");
slider.value = 0;
document.body.style.background = "#000000";
document.body.style.background = "url('pictures/stars_background.png')";
document.body.style.color = "#FFFFFF";
document.querySelector("#darkMode").classList.add("dark");
output.innerHTML = slider.value * 20;

