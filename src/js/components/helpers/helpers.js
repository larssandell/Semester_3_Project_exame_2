// import { hamburgerAnimation } from '../hamburger.mjs';
import { funcUserLogin } from '../Api/login.js';
import { funcUserReg } from '../Api/register.js';
import { loggedIn } from '../templates/loggedin.js';
import { logoutUser } from '../Api/logout.js';

export function pageHelpers() {
    funcUserLogin();
    funcUserReg();
    loggedIn();
    logoutUser();
}
