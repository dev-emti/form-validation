
//FORM VALIDATION
const sUsername = document.querySelector('#sUsername');
const sEmail = document.querySelector('#sEmail');
const sPassword = document.querySelector('#sPassword');
const sConfirmPassword = document.querySelector('#sConfirmPassword');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
let isFormValid = false;

formSignup.addEventListener('submit', e => {
    if(!isFormValid){
        e.preventDefault();
        validateSignupForm();

    }
});
formSignin.addEventListener('submit', e => {
    if(!isFormValid){
        e.preventDefault();
        validateSigninForm();

    }
});
function validateSignupForm(){

    isFormValid = true;
    //sUsername Regex
    const usernamePattern = /^[a-zA-Z\d\-]{5,15}$/;
    if(!usernamePattern.test(sUsername.value)){
        setInvalidFor(sUsername, 'Invalid Username');
    }else{
        setValidFor(sUsername);
    }
    const emailPattern = /^([a-zA-Z])([a-zA-Z\d\.])+(\@)([a-zA-Z\d])+(\.)([a-zA-Z])+([a-zA-Z])?$/;
    if(!emailPattern.test(sEmail.value)){
        setInvalidFor(sEmail, 'Invalid Email');
    }else{
        setValidFor(sEmail);
    }
    const passValue = sPassword.value;
    const cpassValue = sConfirmPassword.value;
    const passwordPattern = /^([a-zA-Z])([a-zA-Z\d]){5,15}$/;
    if(!passwordPattern.test(sPassword.value)){
        setInvalidFor(sPassword, 'Invalid Password');
    }else{
        setValidFor(sPassword);   
    }
    if(sPassword.value === null || sPassword.value == ''){
        setInvalidFor(sConfirmPassword, 'Enter Password First');
    }else if(passValue !== cpassValue){
        setInvalidFor(sConfirmPassword, 'Password does not match');
    }else{
        setValidFor(sConfirmPassword);
    }
}
function validateSigninForm(){
    isFormValid = true;
    //sUsername Regex
    const usernamePattern = /^[a-zA-Z\d\-]{5,15}$/;
    if(!usernamePattern.test(username.value)){
        setInvalidFor(username, 'Invalid Username');
    }else{
        setValidFor(username);
    }
    const passwordPattern = /^([a-zA-Z])([a-zA-Z\d]){5,15}$/;
    if(!passwordPattern.test(password.value)){
        setInvalidFor(password, 'Invalid Password');
    }else{
        setValidFor(password);   
    }
}

function setInvalidFor(input, errorText){
    const inputGroup = input.parentElement;
    const errorMessage = inputGroup.querySelector('.error-message');

    errorMessage.innerText = errorText;
    inputGroup.classList.remove('valid')
    inputGroup.classList.add('invalid')
    isFormValid = false;
}
function setValidFor(input){
    const inputGroup = input.parentElement;
    
    inputGroup.classList.remove('invalid')
    inputGroup.classList.add('valid')
}