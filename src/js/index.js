import { listingsUrlPromo } from './components/urls.mjs';
import { hamburgerAnimation } from './components/hamburger.mjs';
// import { userLogin } from './components/Api/login.mjs';
// import { loginSub } from './components/document.mjs';
import { funcUserLogin } from './components/Api/login.mjs';
import { getOption } from './components/Api/options.mjs';
import { loggedIn } from './components/templates/loggedin.mjs';
import { logoutUser } from './components/Api/logout.mjs';
import { funcUserReg } from './components/Api/register.mjs';
const indexMain = document.querySelector('#index__main');
import loader from './components/document.mjs';
funcUserLogin();
hamburgerAnimation();
loggedIn();
logoutUser();
funcUserReg();

async function getlistingsAll() {
    try {
        const response = await fetch(listingsUrlPromo, getOption);
        const data = await response.json();
        console.log(data);
        data.forEach(function (ele) {
            indexCards(ele);
        });
        loader.innerHTML = '';
    } catch (err) {
        console.log(err);
    }
}
getlistingsAll();
