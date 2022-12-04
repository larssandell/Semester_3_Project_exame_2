// import { hamburgerAnimation } from '../hamburger.mjs';
import { funcUserLogin } from '../Api/login.mjs';
import { funcUserReg } from '../Api/register.mjs';
import { loggedIn } from '../templates/loggedin.mjs';
import { logoutUser } from '../Api/logout.mjs';

// export const pageHelpers = function () {
//     hamburgerAnimation();
//     funcUserLogin();
//     funcUserReg();
//     loggedIn();
//     logoutUser();
// };
export function pageHelpers() {
    funcUserLogin();
    funcUserReg();
    loggedIn();
    logoutUser();
    // hamburgerAnimation();
}
