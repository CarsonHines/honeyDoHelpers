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
    let nameVal = name.value;

    if(nameVal.length > 0) {
        name.value = nameVal.charAt(0).toUpperCase() + nameVal.slice(1);
        setTimeout(function () {
            valid(name);
        }, 500);
    }
    else {
        name.style.borderColor = "lightgray"
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
        phoneNum.style.borderColor = "lightgray"
        phoneNum.value = null;
    };
};

function emailWait() {
    let emailVal = email.value;

    if (emailVal.length > 0) {
        setTimeout(function () {
            valid(email);
        }, 500);
    }
    else {
        email.style.borderColor = "lightgray"
    };
};

function messageWait() {
    let messageVal = message.value;

    if(messageVal.length > 10) {
        setTimeout(function () {
            valid(message);
        }, 500);
    }
    else {
        message.style.borderColor = "lightgray"
    };
};

function valid(val) {
    if (val != null) {
        val.style.borderColor = "#009848";
    }
};

//document.getElementById("Button").disabled = false;