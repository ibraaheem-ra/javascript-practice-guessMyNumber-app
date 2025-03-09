'use strict';

// const message = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// let number = Math.trunc(Math.random() * 20 + 1);
// console.log(number);

// let score = 20;
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   //when there is no input
//   if (!guess) {
//     message('No number');
//   }
//   // when the input is right
//   else if (guess === number) {
//     message('Correct Number YOU WON!');
//     document.querySelector('body').style.backgroundColor = '#60b347';

//     document.querySelector('.number').textContent = number;

//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   }
//   // when the input is wrong
//   else if (guess !== number) {
//     if (score > 1) {
//       message(guess > number ? '📈Too high' : '📉Too low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       message('You lost the game');
//     }
//   }

//   // when the input is too high
//   // else if (guess > number) {
//   //   if (score > 1) {
//   //     message.textContent = 'Too high';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'You lost the game';
//   //   }
//   // }
//   // //when the input is too low
//   // else if (guess < number) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = 'Too low';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'You lost the game';
//   //   }
//   // }
// });

// document.querySelector('.again').addEventListener('click', () => {
//   score = 20;
//   document.querySelector('.score').textContent = score;

//   number = Math.trunc(Math.random() * 20 + 1);
//   console.log(number);

//   document.querySelector('.number').textContent = '?';

//   message('Start guessing...');

//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';

//   document.querySelector('.number').style.width = '15rem';
// });

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'NO NUMBER!';
//   }
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('NO NUMBER!');
  } else if (guess === secretNumber) {
    displayMessage('CORRECT NUMBER!🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!📈' : 'Too Low!📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  } //else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //HTML
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  //CSS Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
