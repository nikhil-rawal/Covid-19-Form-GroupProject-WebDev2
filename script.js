function error_logg(message) {
    document.getElementById("error_message").style.display = 'block';
    document.getElementById("error_message").innerHTML = message;
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function validateForm() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const emailaddress = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const province = document.getElementById("province");
    const countrycode = document.getElementById("countrycode");

    const alphaonly = /^[a-zA-Z]+$/;

    if (!fname.value.match(alphaonly)) {
        error_logg("Please enter only alphabets in First Name");
        fname.focus();
        return false;
    }
    else if (!lname.value.match(alphaonly)) {
        error_logg("Please enter only alphabets in Last Name");
        lname.focus();
        return false;
    }
    else if (!city.value.match(alphaonly)) {
        error_logg("Please enter only alphabets in City");
        city.focus();
        return false;
    }
    else if (!province.value.match(alphaonly)) {
        error_logg("Please enter only alphabets in Province");
        province.focus();
        return false;
    }
    else if (fname == null || fname == "") {
        error_logg("Please provide your First Name!");
        return false;
    }
    else if (lname == null || lname == "") {
        error_logg("Please provide your Last Name!");
        return false;
    }
    else if (emailaddress == null || emailaddress == "") {
        error_logg("Please provide your Email!");
        return false;
    }
    else if (phone == null || phone == "") {
        error_logg("Please provide your Phone Number!");
        return false;
    }
    else if (address == null || address == "") {
        error_logg("Please provide your Address!");
        return false;
    }
    else if (city == null || city == "") {
        error_logg("Please provide City!");
        return false;
    }
    else if (province == null || province == "") {
        error_logg("Please provide Province!");
        return false;
    }
    else if (countrycode == null || countrycode == "") {
        error_logg("Please provide Country Code!");
        return false;
    }
    else if (phone.length < 10 || phone.length > 12) {
        error_logg("Write Phone in correct format");
    }

    const emailIsValid = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (!emailIsValid(emailaddress.value)) {
        error_logg("Please enter a valid email address.");
        emailaddress.focus();
        return false;
    }

    document.getElementById('covid19').submit();

    var FS = document.getElementById("FS");
    if (FS) {

        var files = FS.files;

        if (files.length > 0) {
            if (files[0].size > 99 * 1024) {
                FS.setCustomValidity("The selected file must not be larger than 99 kB");
                return;
            }
        }
        FS.setCustomValidity("");
    }
}

function TDate() {
    var UserDate = document.getElementById("booking").value;
    var ToDate = new Date();

    if (new Date(UserDate).getTime() <= ToDate.getTime()) {
        error_logg("The Date must be Bigger or Equal to today date");
        return false;
    }
    return true;
}




