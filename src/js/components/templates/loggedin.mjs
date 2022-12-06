import {
    btnLogin,
    btnLogout,
    btnRegister,
    createLi,
    navAccount,
    userName,
} from '../document.mjs';

// må sjekke denne
export function loggedIn() {
    if (userName !== null) {
        btnLogin.style.display = 'none';
        btnLogout.style.display = 'block';
        btnRegister.style.display = 'none';
        navAccount.style.display = 'block';
        createLi.style.display = 'block';
        console.log('logged in OK', userName);
    } else {
        btnLogin.style.display = 'block';
        btnLogout.style.display = 'none';
        btnRegister.style.display = 'block';
        console.log('logged Out', userName);
    }
}
