# project related to Dom

## project link
[click here](https://stackblitz.com/edit/stackblitz-starters-889uhw?file=index.html)

# solution

## project1

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
## project2

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
## project3
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