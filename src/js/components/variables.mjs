// // regEx validator
export function emailVali(email) {
    const regEx = /^([a-zA-Z0-9-_.]+)@(stud.noroff.no)$/;
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
