import { btnLogout } from '../document.mjs';

export function logoutUser() {
    btnLogout.addEventListener('click', () => {
        localStorage.clear();
        window.location.replace('/index.html');
    });
}
