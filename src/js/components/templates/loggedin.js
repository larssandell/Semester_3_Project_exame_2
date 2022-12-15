import {
    btnLogin,
    btnLogout,
    btnRegister,
    createLi,
    navAccount,
    userName,
} from '../document.js';

export function loggedIn() {
    if (userName !== null || undefined) {
        btnLogin.style.display = 'none';
        btnLogout.style.display = 'block';
        btnRegister.style.display = 'none';
        navAccount.style.display = 'block';
        createLi.style.display = 'block';
        // console.log('logged in OK', userName);
    } else {
        btnLogin.style.display = 'block';
        btnLogout.style.display = 'none';
        btnRegister.style.display = 'block';
        // console.log('logged Out', userName);
    }
}
