export let checkPassword = {
    passwordLength: false,
    passwordAlphabet: false,
    passwordDigit: false
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^/s@]{2,}$/i;
const nameRegex = /^[\p{L} ,.'-]+$/u;

export const validateStep1 = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
        errors.email = 'Email with valid format is required'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } 
    
    else if (!checkPassLength(values.password) || !checkPassAlphabet(values.password) || !checkPassDigit(values.password)) {
        errors.passwords = true
    }

    return errors;
}

export const validateStep2 = (values) => {

    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'First name is required!';

    } else if (!nameRegex.test(values.firstname)) {
        errors.firstname = 'First name with valid format is required';
    }

    if (!values.lastname) {
        errors.lastname = 'Last name is required!';
    }      else if (!nameRegex.test(values.lastname)) {
        errors.lastname = 'Last name with valid format is required';
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Date of birth is required'
    } else if (!ageValidate(values.dateOfBirth)) {
        errors.dob = true
    } 

    if (!values.isCheck) {
        errors.isCheck = true
    }

    return errors;
}

export const checkPassLength = (password) => {
    if (password.length >= 8) {
        checkPassword.passwordLength = true
        return true
    }
    else {
        checkPassword.passwordLength = false
        return false
    }
}

export const checkPassAlphabet = (password) => {
    if (password.length >= 1 && password.match(/[a-z]/i)) {
        checkPassword.passwordAlphabet = true
        return true;
    }
    else {
        checkPassword.passwordAlphabet = false
        return false
    }
}

export const checkPassDigit = (password) => {
    if (password.match(/\d/)) {
        checkPassword.passwordDigit = true
        return true
    }
    else {
        checkPassword.passwordDigit = false
        return false
    }
}

export const validatePassword = () => {
    return checkPassword.passwordLength && checkPassword.passwordAlphabet &&  checkPassword.passwordDigit
}

export const validateEmailFormat = (email) => {
    return emailRegex.test(email)
}

export const ageValidate = (birthday) => {

    let optimizedBirthday = birthday.replace(/-/g, '/');
    let newBirthday = new Date(optimizedBirthday);

    let currentDate = new Date().toJSON().slice(0, 10);
    let userAge = ~~((Date.now(currentDate) - newBirthday) / (31557600000))

    return userAge < 18 ? false : true
}