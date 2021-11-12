/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const value = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["♦", "♥", "♠", "♣"];
  const suitUp = document.querySelector(".suit-up");
  const suitDown = document.querySelector(".suit-down");
  const pinta = suits[Math.floor(Math.random() * 4)];
  const p1 = document.createElement("p");
  if (pinta == "♦" || pinta == "♥") {
    p1.classList.add("text-danger");
  } else {
    p1.classList.add("text-dark");
  }
  p1.innerHTML = pinta;
  const p2 = document.createElement("p");
  if (pinta == "♦" || pinta == "♥") {
    p2.classList.add("text-danger");
  } else {
    p2.classList.add("text-dark");
  }
  p2.innerHTML = pinta;
  suitUp.appendChild(p1);
  suitDown.appendChild(p2);

  const number = document.querySelector(".number");
  const numero = value[Math.floor(Math.random() * 14)];
  const p = document.createElement("p");
  p.classList.add("text-success");
  p.innerHTML = numero;
  number.appendChild(p);
};
