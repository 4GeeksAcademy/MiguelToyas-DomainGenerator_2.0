/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { name } from "file-loader";

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
  "fluffy",
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
  "hippopota",
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
  ".ta",
];

// Generación del array de dominios

let domainList = [];
let domainHackList = [];

names.forEach((name) => {
  adjectives.forEach((adjective) => {
    nouns.forEach((noun) => {
      endings.forEach((ending) => {
        if (noun.endsWith(ending.slice(1))) {
          let generatedDomainHack =
            name + adjective + noun.slice(0, -ending.length + 1) + ending;
          domainHackList.push(generatedDomainHack);
          domainList.push(generatedDomainHack);
        } else {
          let generatedDomain = name + adjective + noun + ending;
          domainList.push(generatedDomain);
        }
      });
    });
  });
});

console.log(domainList);
console.log(domainHackList);

// Mostrar en pantalla los dominios

const printDomainNormal = () => {
  document.querySelector("#domainNormal").innerHTML =
    domainList[Math.floor(Math.random() * domainList.length)];
};

const printDomainHack = () => {
  document.querySelector("#domainHack").innerHTML =
    domainHackList[Math.floor(Math.random() * domainHackList.length)];
};

window.onload = function() {
  printDomainNormal();
  printDomainHack();
};

document
  .querySelector("#normalDomainButton")
  .addEventListener("click", printDomainNormal);

document
  .querySelector("#hackDomainButton")
  .addEventListener("click", printDomainHack);
