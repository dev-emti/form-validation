const popSignup = document.querySelector('#popSignup');
const popSignin = document.querySelector('#popSignin');
const formSignup = document.querySelector('#formSignup');
const formSignin = document.querySelector('#formSignin');
const formContainer = document.querySelector('#formContainer');
const closeForm = document.querySelector('#closeForm')
const formTitle = document.querySelector('#formTitle');

const overlay = document.querySelector('#overlay');

//Event Listener
popSignup.addEventListener('click', e => {
    formTitle.innerText = 'Signup Form'
    formContainer.classList.add('active');
    overlay.classList.add('active');
    formSignup.classList.add('active')
});
popSignin.addEventListener('click', e => {
    formTitle.innerText = 'Signin Form'
    formContainer.classList.add('active');
    overlay.classList.add('active');
    formSignin.classList.add('active')
});
closeForm.addEventListener('click', e => {
    formContainer.classList.remove('active');
    overlay.classList.remove('active');
    formSignup.classList.remove('active')
    formSignin.classList.remove('active')
});
overlay.addEventListener('click', e => {
    formContainer.classList.remove('active');
    overlay.classList.remove('active');
    formSignup.classList.remove('active')
    formSignin.classList.remove('active')
});
