'use strict';

let scorePlayer1 = document.querySelector('#score--0');
let scorePlayer2 = document.getElementById('score--1'); // Plus rapide que le query selector
let diceElement = document.querySelector('.dice');
const buttnNew = document.querySelector('.btn--new');
const buttnRoll = document.querySelector('.btn--roll');
const buttnHold = document.querySelector('.btn--hold');

//starting condition
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
diceElement.classList.add('hidden');

const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');

//Rolling dice functionnality
buttnRoll.addEventListener('click', function () {
  // 1.Generate random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display the dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: if true, switch player
});
