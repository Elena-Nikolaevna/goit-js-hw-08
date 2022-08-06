import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state'; //

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onFormSubmit); //?
form.addEventListener('input', throttle(onFormData, 500)); //?

const formData = {};

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem(FORM_KEY)));
  evt.preventDefault();
  //console.log('URA');
  evt.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(FORM_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();
