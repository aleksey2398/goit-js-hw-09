import { Notify } from "notiflix";

const refs = {
 form : document.querySelector('.form'),
 startDelay : document.querySelector('input[name=delay]'),
 step : document.querySelector('input[name=step]'),
 amount : document.querySelector('input[name=amount]'),
}

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let delay = Number(refs.startDelay.value);
  for (let i = 0; i < Number(refs.amount.value); i++) {
    const position = i+1;
    delay += Number(refs.step.value);
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,{useIcon: false, clickToClose: true});
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,{useIcon: false, clickToClose: true});
    });
    
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}