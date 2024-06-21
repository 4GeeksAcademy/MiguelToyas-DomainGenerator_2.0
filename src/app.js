/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const names = [
  "fuzzy",
  "giggle",
  "bouncy",
  "whacky",
  "snuggle",
  "cheesy",
  "wobble",
  "goofy",
  "jolly",
  "fluffy"
];

const adjectives = ["", "silly", "crazy", "weird", "", "funky", "odd"];

const nouns = [
  "banana",
  "pickle",
  "ninja",
  "potato",
  "panda",
  "unicorn",
  "taco",
  "moose",
  "dinosaur",
  "sloth",
  "burrito",
  "hippopota"
];

const endings = [
  ".com",
  ".es",
  ".eu",
  ".net",
  ".org",
  ".io",
  ".biz",
  ".co",
  ".info",
  ".tech",
  ".nana",
  ".kle",
  ".nja",
  ".ato",
  ".nda",
  ".corn",
  ".co",
  ".rse",
  ".oth",
  ".ta"
];

const getRandomNumber = arr => arr[Math.floor(Math.random() * arr.length)];

const generateDomain = () => {
  const name = getRandomNumber(names);
  const adjective = getRandomNumber(adjectives);
  const noun = getRandomNumber(nouns);
  const ending = getRandomNumber(endings);

  let domain;

  if (noun.endsWith(ending.slice(1))) {
    domain = `${name}${adjective}${noun.slice(0, -ending.length + 1)}${ending}`;
    document.querySelector("#generated").innerHTML = [
      "We have a domain hack: ",
      domain
    ].join("");
    document.querySelector("#generated").classList.remove("alert-warning");
    document.querySelector("#generated").classList.add("alert-success");
    document.querySelector("#generated").classList.add("fs-1");
  } else {
    domain = `${name}${adjective}${noun}${ending}`;
    document.querySelector("#generated").innerHTML = domain;
    document.querySelector("#generated").classList.add("alert-warning");
    document.querySelector("#generated").classList.remove("alert-success");
  }
};

const buttonsAction = () => {
  generateDomain;
  document.querySelector("#tryAgain").classList.remove("d-none");
  document.querySelector("#tryAgain").classList.add("d-block");
  document.querySelector("#sure").classList.add("d-none");
  document.querySelector("#sure").classList.remove("d-block");
};

document.querySelector("#tryAgain").addEventListener("click", generateDomain);

document.querySelector("#sure").addEventListener("click", buttonsAction);

window.onload = function() {
  //write your code here
  generateDomain();
};
