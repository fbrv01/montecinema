export const checkPassword = {
    passwordLength: false,
    passwordAlphabet: false,
    passwordDigit: false
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^/s@]{2,}$/i;
const nameRegex = /^[\p{L} ,.'-]+$/u;

export const validateStep1 = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
        errors.email = 'Email with valid format is required';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } 
    
    else if (!checkPassLength(values.password) || !checkPassAlphabet(values.password) || !checkPassDigit(values.password)) {
        errors.passwords = true;
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
    } else if (!nameRegex.test(values.lastname)) {
        errors.lastname = 'Last name with valid format is required';
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Date of birth is required';
    } else if (!ageValidate(values.dateOfBirth)) {
        errors.dob = true;
    } 

    if (!values.isCheck) {
        errors.isCheck = true;
    }

    return errors;
}

export const checkPassLength = (password) => {
    const isCorrectLength = password.length >= 8;
    checkPassword.passwordLength = isCorrectLength;
    return isCorrectLength;
}

export const checkPassAlphabet = (password) => {
    const isAlphabethicalValid = password.length >= 1 && password.match(/[a-z]/i);
    checkPassword.passwordAlphabet = isAlphabethicalValid;
    return isAlphabethicalValid;
}

export const checkPassDigit = (password) => {
    const isDigitPassValid = password.match(/\d/);
    checkPassword.passwordDigit = isDigitPassValid;
    return isDigitPassValid;
}

export const validatePassword = () => {
    return checkPassword.passwordLength && checkPassword.passwordAlphabet &&  checkPassword.passwordDigit;
}

export const validateEmailFormat = (email) => {
    return emailRegex.test(email);
}

export const ageValidate = (birthday) => {
    const optimizedBirthday = birthday.replace(/-/g, '/');
    const newBirthday = new Date(optimizedBirthday);
    const currentDate = new Date().toJSON().slice(0, 10);
    const userAge = ~~((Date.now(currentDate) - newBirthday) / (31557600000));

    return userAge > 18;
}
