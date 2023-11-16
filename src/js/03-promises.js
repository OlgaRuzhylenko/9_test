const form = document.querySelector('form')
const firstDelayInput = document.querySelector("input[name='delay']");
const delayStepInput = document.querySelector("input[name='step']");
const amountInput = document.querySelector("input[name='amount']");
const submitBtn = document.querySelector('button')

const amountOfPromises = parseInt(amountInput.value);
const firstDelay = parseInt(firstDelayInput.value);
const step = parseInt(delayStepInput.value);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();

    for (let i = 0; i < amountOfPromises; i+=1) {
    const position = i + 1;
    const delay = firstDelay + i * step;
    createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
  };
 

