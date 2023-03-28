const validationBorder = document.getElementsByClassName('form-control');
let firstNameValue = document.getElementById('first_name');
const lastNameValue = document.getElementById('last_name');
const phoneNumberValue = document.getElementById('phone_number');
const emailValue = document.getElementById('email');
const messageValue = document.getElementById('message');

firstNameValue.addEventListener("change", test);

function test() {
    console.log(firstNameValue.value)
    firstNameValue.value = firstNameValue.value.charAt(0).toUpperCase() + firstNameValue.value.slice(1);
};

// for(let i = 0 ; i <= validationBorder.length ; i++) {
//     if(typeof validationBorder[i] == "string") {
//         validationBorder[i].addEventListener("change", upperCase);
//     };
//     validationBorder[i].addEventListener("change", validation);
// };

// function upperCase() {

// }

// function validation() {
//     console.log(validationBorder);
// };