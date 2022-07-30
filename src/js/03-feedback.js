import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onformData, 500));

const formData = {};

function onFormSubmit(evt) {
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(`${name}: ${value}`));
  //console.log(JSON.parse(localStorage.getItem(FORM_KEY)));
  evt.preventDefault(); // отправка формы
  evt.currentTarget.reset(); // очищаем форму
  localStorage.removeItem(FORM_KEY);
}

function onformData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function dataLocalStorage() {
  const data = JSON.parse(localStorage.getItem(FORM_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
