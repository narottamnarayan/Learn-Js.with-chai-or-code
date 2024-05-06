# project related to Dom

## project link
[click here](https://stackblitzstarterslwe6rf-0412--8080--34455753.local-credentialless.webcontainer.io)

# solution

## project1 solution

```javascript

console.log('narayan')
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(buttons);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## project2 solution

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height: ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```
## project3 solution
``` javascript

const clock = document.getElementById('clock');
// console.log('narayan', clock)

// const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.tolocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## project4 solution 
```javascripts

let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);

const Submit = document.querySelector('#subt');
// console.log(Submit);
const userInput = document.querySelector('#guessField');
// console.log(userInput);
const guesslot = document.querySelector('.guesses');
// console.log(guesslot);
const remaining = document.querySelector('.lastResult');
// console.log(remaining);
const loworHi = document.querySelector('.lowOrHi');
// console.log(loworHi);
const startover = document.querySelector('.resultParas');
// console.log(startover);

const p = document.createElement('p');
// console.log(p);
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  Submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // console.log('guess', guess);
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more then 1');
  } else if (guess > 100) {
    alert('please enter a number less then 100');
  } else {
    prevGuess.push(guess);
    console.log('guess', guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // console.log('hi', guess);
  if (guess === randomNum) {
    displayMessage(`you guess rigth number`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`you guess the number too low`);
  } else if (guess > randomNum) {
    displayMessage(`you guess the number too high`);
  }
}

function displayGuess(guess) {
  // console.log('hii', guess);
  userInput.value = '';
  guesslot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // console.log('hiii', guess);
  loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebButton = document.querySelector(`#newGame`);
  newGamebButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    startover.removeChild(p);
    userInput.removeAttribute('disabled');
    playGame = true;
  });
}








```