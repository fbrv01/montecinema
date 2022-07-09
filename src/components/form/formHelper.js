export let checkPassword = {
    passwordLength: false,
    passwordAlphabet: false,
    passwordDigit: false
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^/s@]{2,}$/i;


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
        errors.firstname = "First name is required !"
    }

    if (!values.lastname) {
        errors.lastname = "Last name is required !"
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