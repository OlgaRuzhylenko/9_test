function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const firstDelayInput = document.querySelector("input[name='delay']");
const delayStepInput = document.querySelector("input[name='step']");
const amountInput = document.querySelector("input[name='amount']");
const submitBtn = document.querySelector('button')


