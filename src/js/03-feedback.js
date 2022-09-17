import throttle from 'lodash.throttle';

let email = document.querySelector("input[name='email']");
let message = document.querySelector("textarea[name='message']");
let form = document.querySelector('form');
;

const saveEmail = () => {
  if (JSON.parse(localStorage.getItem('feedback-form-state')) !== null) {
    return JSON.parse(localStorage.getItem('feedback-form-state')).email;
  }
    return null;
};

const saveMessage = () => {
  if (JSON.parse(localStorage.getItem('feedback-form-state')) !== null) {
   return JSON.parse(localStorage.getItem('feedback-form-state')).message;
  } else return null;
};

const saveForm = {
  email: saveEmail(),
  message: saveMessage(),
};

  email.value = saveForm.email;
  message.value = saveForm.message;

form.addEventListener('input', throttle(event => {
    if (event.target.name === 'email') {
      saveForm.email = event.target.value;
    } else if (event.target.name === 'message') {
      saveForm.message = event.target.value;
    }

  localStorage.setItem('feedback-form-state', JSON.stringify(saveForm)); 
  
}, 500));


form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(saveForm);
    saveForm.email = null;
    saveForm.message = null;

});


