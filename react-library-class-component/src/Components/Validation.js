
export function firstnameValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function lastnameValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function emailValidation(input) {
    return /^.+@.+\..+$/.test(input);
}

export function usernameValidation(input) {
    return /^.+@.+\..+$/.test(input);
}

export function passwordValidation(input) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,30}$/.test(input);
}

export function BookIdValidation(input) {
    return /^[0-9\s]{3,50}$/.test(input);
}

export function BookTitleValidation(input) {
    return /^[A-Za-z0-9\s]{3,50}$/.test(input);
}

export function BookDescValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function AuthorNameValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function NumberofBooksValidation(input) {
    return /^[0-9]{1,50}$/.test(input);
}