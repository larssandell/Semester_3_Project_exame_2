import { btnLogout } from '../document.js';

export function logoutUser() {
    btnLogout.addEventListener('click', () => {
        localStorage.clear();
        window.location.replace('/index.html');
    });
}
