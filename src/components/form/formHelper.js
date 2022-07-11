export let checkPassword = {
    passwordLength: false,
    passwordAlphabet: false,
    passwordDigit: false
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^/s@]{2,}$/i;
const nameRegex = /^[\p{L} ,.'-]+$/u;


export const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Email is required !";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Email with valid format is required !"
    }

    if (!values.password) {
        errors.password = "Password is required !"
    }

    if (!values.firstname) {
        errors.firstname = "firstname is required!";
    } else if (!nameRegex.test(values.firstname)) {
        errors.firstname = "First name with valid format is required! !";
    }


    if (!values.lastname) {
        errors.lastname = "lastname is required!";
    }      else if (!nameRegex.test(values.lastname)) {
        errors.lastname = "Last name with valid format is required! !";
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "Date of birth is required !"
    } else if (!ageValidate(values.dateOfBirth)) {
        errors.dateOfBirth = "You should be minimum 18 years old !"
    }

    if (!values.isCheck) {
        errors.isCheck = "Check is needed"
    }

    return errors;

}

export const checkPassLength = (password) => {
    if (password.length >= 8) {
        checkPassword.passwordLength = true
        return true
    }
}


export const checkPassAlphabet = (password) => {
    if (password.length >= 1 && password.match(/[a-z]/i)) {
        checkPassword.passwordAlphabet = true
        return true;
    }
}

export const checkPassDigit = (password) => {
    if (password.match(/\d/)) {
        checkPassword.passwordDigit = true
        return true
    }
}


export const validatePassword = () => {
    return checkPassword.passwordLength && checkPassword.passwordAlphabet &&  checkPassword.passwordDigit
}


export const validateEmailFormat = (email) => {
    return emailRegex.test(email)
}


const ageValidate = (birthday) => {

    let optimizedBirthday = birthday.replace(/-/g, "/");
    let newBirthday = new Date(optimizedBirthday);

    let currentDate = new Date().toJSON().slice(0, 10);
    let userAge = ~~((Date.now(currentDate) - newBirthday) / (31557600000))

    return userAge < 18 ? false : true

}




