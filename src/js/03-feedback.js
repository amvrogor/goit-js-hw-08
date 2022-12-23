import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const feedbackFormState =
  JSON.parse(localStorage.getItem('feedback-form-state')) || '';
email.value = feedbackFormState.email || '';
message.value = feedbackFormState.message || '';
console.log(email.value);

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;
  const input = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(input));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
