'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let actScore = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};
const widthNumber = function (style) {
  document.querySelector('.number').style.width = style;
};
const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};
const backGroundBody = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🚫 No number!');
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);

    displayMessage('🎉 Correct Number');

    backGroundBody('#60b347');

    widthNumber('30rem');

    displayNumber(secretNumber);
    if (highscore < actScore) {
      highscore = actScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (actScore > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      actScore--;
      displayScore(actScore);
    } else {
      displayMessage('☠️ Game Over!');
      displayScore(0);
      backGroundBody('#f00');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  actScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(actScore);
  displayNumber('?');

  document.querySelector('.guess').value = '';

  backGroundBody('#222');

  widthNumber('15rem');
});
