import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state'; //

const form = document.querySelector('.feedback-form');

initForm();

form.addEventListener('submit', onFormSubmit); //?
form.addEventListener('input', throttle(onFormData, 500)); //?

function onFormSubmit(evt) {
  //console.log(JSON.parse(localStorage.getItem(FORM_KEY)));
  evt.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(value, name));
  //console.log('URA');
  evt.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
}

function onFormData(evt) {
  let constantFilter = localStorage.getItem(FORM_KEY);
  constantFilter = constantFilter ? JSON.parse(constantFilter) : {};

  constantFilter[evt.target.name] = evt.target.value;

  localStorage.setItem(FORM_KEY, JSON.stringify(constantFilter));
}

function initForm() {
  let constantFilter = localStorage.getItem(FORM_KEY);

  if (constantFilter) {
    constantFilter = JSON.parse(constantFilter);
    Object.entries(constantFilter).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
