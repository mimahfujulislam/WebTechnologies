function validate(x) {
    let flag = true;

    document.querySelectorAll("span").forEach(function (s) {
        s.innerHTML = "";
    });

    const fname = x.fname.value;
    let fnameErr = document.getElementById("fnameErr");
    if (fname === "") {
        fnameErr.innerHTML = " Required";
        flag = false;
    }

    const lname = x.lname.value;
    let lnameErr = document.getElementById("lnameErr");
    if (lname === "") {
        lnameErr.innerHTML = " Required";
        flag = false;
    }

    const gender = x.gender.value;
    let genderErr = document.getElementById("genderErr");
    if (gender === "") {
        genderErr.innerHTML = " Select Gender";
        flag = false;
    }

    const father = x.father.value;
    let fatherErr = document.getElementById("fatherErr");
    if (father === "") {
        fatherErr.innerHTML = " Required";
        flag = false;
    }

    const mother = x.mother.value;
    let motherErr = document.getElementById("motherErr");
    if (mother === "") {
        motherErr.innerHTML = " Required";
        flag = false;
    }

    const blood = x.blood.value;
    let bloodErr = document.getElementById("bloodErr");
    if (blood === "") {
        bloodErr.innerHTML = " Select Blood Group";
        flag = false;
    }

    const religion = x.religion.value;
    let religionErr = document.getElementById("religionErr");
    if (religion === "") {
        religionErr.innerHTML = " Select Religion";
        flag = false;
    }

    const email = x.email.value;
    let emailErr = document.getElementById("emailErr");
    if (email === "") {
        emailErr.innerHTML = " Required";
        flag = false;
    }

    const phone = x.phone.value;
    let phoneErr = document.getElementById("phoneErr");
    if (phone === "") {
        phoneErr.innerHTML = " Required";
        flag = false;
    }

    const website = x.website.value;
    let websiteErr = document.getElementById("websiteErr");
    if (website === "") {
        websiteErr.innerHTML = " Required";
        flag = false;
    }

    const country = x.country.value;
    const division = x.division.value;
    const address = x.address.value;
    const postcode = x.postcode.value;
    let addressErr = document.getElementById("addressErr");

    if (country === "") {
        addressErr.innerHTML = " Select Country";
        flag = false;
    }
    if (division === "") {
        addressErr.innerHTML = " Select Division";
        flag = false;
    }
    if (address === "") {
        addressErr.innerHTML = " Address Required";
        flag = false;
    }
    if (postcode === "") {
        addressErr.innerHTML = " Post Code Required";
        flag = false;
    }

    const username = x.username.value;
    let usernameErr = document.getElementById("usernameErr");
    if (username === "") {
        usernameErr.innerHTML = " Required";
        flag = false;
    }

    const password = x.password.value;
    let passwordErr = document.getElementById("passwordErr");

    if (password === "") {
        passwordErr.innerHTML = " Required";
        flag = false;
    } else {
        if (password.length < 8) {
            passwordErr.innerHTML = " Minimum 8 characters";
            flag = false;
        } else if (!password.match(/[A-Z]/)) {
            passwordErr.innerHTML = " Must contain uppercase";
            flag = false;
        } else if (!password.match(/[a-z]/)) {
            passwordErr.innerHTML = " Must contain lowercase";
            flag = false;
        } else if (!password.match(/[0-9]/)) {
            passwordErr.innerHTML = " Must contain number";
            flag = false;
        } else if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
            passwordErr.innerHTML = " Must contain special character";
            flag = false;
        }
    }

    const confirm = x.confirm.value;
    let confirmErr = document.getElementById("confirmErr");

    if (confirm === "") {
        confirmErr.innerHTML = "Required";
        flag = false;
    } else if (password !== confirm) {
        confirmErr.innerHTML = "Password does not match";
        flag = false;
    }

    return flag;
}
