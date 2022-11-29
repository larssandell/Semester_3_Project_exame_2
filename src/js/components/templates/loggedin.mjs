import {
    btnLogin,
    btnLogout,
    btnRegister,
    accountLink,
    createLi,
} from '../document.mjs';

// må sjekke denne
export function loggedIn() {
    const isUser = localStorage.getItem('userName');
    if (isUser !== null) {
        btnLogin.style.display = 'none';
        btnLogout.style.display = 'block';
        btnRegister.style.display = 'none';
        accountLink.classList.remove('disabled');
        createLi.classList.remove('disabled');
        console.log('logget in');
    } else {
        btnLogin.style.display = 'block';
        btnLogout.style.display = 'none';
        btnRegister.style.display = 'block';
        accountLink.classList.add('disabled');
        createLi.classList.add('disabled');
        console.log('logget ut');
    }
}
