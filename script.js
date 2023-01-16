'use strict';
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
let scorePlayer1 = document.querySelector('#score--0');
let scorePlayer2 = document.getElementById('score--1'); // Plus rapide que le query selector
let diceElement = document.querySelector('.dice');
const buttnNew = document.querySelector('.btn--new');
const buttnRoll = document.querySelector('.btn--roll');
const buttnHold = document.querySelector('.btn--hold');

//starting condition
diceElement.classList.add('hidden');
let currentScoreP1 = document.getElementById('current--0');
let currentScoreP2 = document.getElementById('current--1');
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;

//Rolling dice functionnality
buttnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.Generate random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, switch player
    console.log(dice);
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttnHold.addEventListener('click', function () {
  if (playing) {
    //Score the current player
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Score >=100 TO WIN
    if (scores[activePlayer] >= 100) {
      alert(`Player ${activePlayer + 1} wins !`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      diceElement.classList.add('hidden');
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

buttnNew.addEventListener('click', function () {
  init();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
}

function init() {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  document.querySelector('.dice').classList.remove('hidden');
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;
}
