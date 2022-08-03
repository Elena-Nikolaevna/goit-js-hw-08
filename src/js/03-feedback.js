import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  //console.log(e.target.name);
  //console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  console.log(formData)
});

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('URA');
  evt.currentTarget.reset();
  localStorage.removeItem('FORM_KEY');
}
function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem('FORM_KEY', message);
}
function populateTextarea() {
  const savedMessage = localStorage.getItem('FORM_KEY');
  if (savedMessage) {
    //console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}

/* const FORM_KEY = 'feedback-form-state';

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
 */
