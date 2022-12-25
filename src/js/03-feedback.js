import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

// __After Repeta__

initForm();

form.addEventListener('input', throttle(onInput), 500);
form.addEventListener('submit', onSubmit);

function initForm() {
  let feedbackFormState = localStorage.getItem('feedback-form-state');
  if (feedbackFormState) {
    feedbackFormState = JSON.parse(feedbackFormState);
    Object.entries(feedbackFormState).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

function onInput(evt) {
  evt.preventDefault();
  let feedbackFormState = localStorage.getItem('feedback-form-state');
  feedbackFormState = feedbackFormState ? JSON.parse(feedbackFormState) : {};
  feedbackFormState[evt.target.name] = evt.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function onSubmit(evt) {
  evt.preventDefault();
  const dataObject = {};
  const formData = new FormData(form);
  formData.forEach((value, name) => (dataObject[name] = value));
  console.log(dataObject);
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

// __My trying__

// const email = document.querySelector('input');
// const message = document.querySelector('textarea');
// // const input = {};

// let feedbackFormState =
//   JSON.parse(localStorage.getItem('feedback-form-state')) || {};
// email.value = feedbackFormState.email || '';
// message.value = feedbackFormState.message || '';

// form.addEventListener('input', throttle(onInput), 500);
// form.addEventListener('submit', onSubmit);

// function onInput(evt) {
//   evt.preventDefault();
//   feedbackFormState[evt.target.name] = evt.target.value;
//   // console.log(input);
//   localStorage.setItem(
//     'feedback-form-state',
//     JSON.stringify(feedbackFormState)
//   );
// }

// function onSubmit(evt) {
//   evt.preventDefault();
//   const dataObject = { email: email.value, message: message.value };
//   console.log(dataObject);
//   feedbackFormState = {};
//   evt.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }
