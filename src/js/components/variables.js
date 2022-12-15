// // regEx validator

/**
 * validation function with regEx to validate
 * @param {argument} email
 * @property {regEx} allows a-z A-Z 0-9 and _ domain must be stud.noroff.no
 * @returns resault
 */

export function emailVali(email) {
    const regEx = /([a-zA-Z0-9_])+(@stud.noroff.no)/;
    const emailMatch = regEx.test(email);
    return emailMatch;
}

export function nameVali(name) {
    const regEx = /^[a-zA-Z_]+$/;
    if (name.match(regEx)) {
        return true;
    } else {
        return false;
    }
}
