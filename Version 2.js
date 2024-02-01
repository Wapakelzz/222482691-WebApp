function validateForm() {
    var username = document.getElementById("Fname").value;
    var password = document.getElementById("Password").value;

    if (username.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(username)) {
        alert("Username must have at least 8 characters and include a special character");
        return false;

    }

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert("Password must have at least 8 characters and include special character");
        return false;
    }
    return true;
}
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

myInput.onekey = function (). {
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    var number = /[0-9]/g;
    if (myInput.value.match(number)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

