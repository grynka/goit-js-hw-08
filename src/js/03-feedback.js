import throttle from 'lodash.throttle';

let email = document.querySelector("input[name='email']");
let message = document.querySelector("textarea[name='message']");
let form = document.querySelector('form');

const saveForm = {
  email: "",
  message: "",
};


if (JSON.parse(localStorage.getItem('feedback-form-state')) !== null) {
    email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
}

form.addEventListener('input', throttle(event => {
    if (event.target.name === "email") {
        saveForm.email = event.target.value;
    }
    else if (event.target.name === 'message') {
        saveForm.message = event.target.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(saveForm)); 
}, 500));

form.addEventListener('submit', event => {
    form.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(saveForm);
});



