const validationBorder = document.getElementsByClassName('form-control');
let fName = document.getElementById('first_name');
let lName = document.getElementById('last_name');
let phoneNum = document.getElementById('phone_number');
let email = document.getElementById('email');
let message = document.getElementById('message');

fName.addEventListener("change", function (){
    capitalize(fName);
});

lName.addEventListener("change", function () {
    capitalize(lName);
});

phoneNum.addEventListener("change", dashedNumber);

email.addEventListener("change", emailWait);

message.addEventListener("change", messageWait);

function capitalize(name) {
    nameVal = name.value;

    if(nameVal.length > 0) {
        name.value = nameVal.charAt(0).toUpperCase() + nameVal.slice(1);
        setTimeout(function () {
            valid(name);
        }, 500);
    };
};

function dashedNumber() {
    let phoneNumVal = phoneNum.value;

    if(phoneNumVal.length == 10) {
        phoneNum.value = phoneNumVal.slice(0,3) + '-' + phoneNumVal.slice(3,6) + '-' + phoneNumVal.slice(6,10);
        setTimeout(function () {
            valid(phoneNum);
        }, 500);
    }
    else {
        phoneNum.value = null;
    };
};

function emailWait() {
    emailVal = email.value;

    if (emailVal.length > 0) {
        setTimeout(function () {
            valid(email);
        }, 500);
    };
};

function messageWait() {
    messageVal = message.value;

    if(messageVal.length > 10) {
        setTimeout(function () {
            valid(message);
        }, 500);
    };
};

function valid(val) {
    val.style.borderColor = "#009848";
};