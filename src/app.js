/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
};
const symbols = ["♦", "♥", "♠", "♣"];
const numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K",
  "A"
];
const card = document.getElementById("card");
const height = document.getElementById("alto");
const width = document.getElementById("ancho");
const button = document.getElementById("generador");
const symbolTop = document.getElementById("topSymbol");
const centerNumber = document.getElementById("number");
const bottomTop = document.getElementById("bottomSymbol");

function setRandom(arr) {
  let number = Math.floor(Math.random() * arr.length);
  return arr[number];
}

function sameColor() {
  let equal = setRandom(symbols);
  if (equal == "♦" || equal == "♥") {
    symbolTop.style.color = "red";
    bottomTop.style.color = "red";
    centerNumber.style.color = "red";
    button.style.color = "red";
  } else {
    symbolTop.style.color = "black";
    bottomTop.style.color = "black";
    centerNumber.style.color = "black";
    button.style.color = "black";
  }
  return equal;
}

function mostrar() {
  let palo = sameColor();
  symbolTop.innerText = palo;
  centerNumber.innerText = setRandom(numbers);
  bottomTop.innerText = palo;
  card.style.height = `${height.value}px`;
  card.style.width = `${width.value}px`;
}

mostrar();

setInterval(mostrar, 10000);

button.addEventListener("click", mostrar);
