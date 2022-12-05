import { listingsUrlPromo } from './components/urls.mjs';
import { getOption } from './components/Api/options.mjs';
import { loader } from './components/document.mjs';
// import { pageHelpers } from './components/helpers/helpers.mjs';
import { indexCards } from './components/templates.mjs';
import { funcUserLogin } from '../js/components/Api/login.mjs';
import { createEntryListing } from './components/Api/createlisting.mjs';
import { hamburgerAnimation } from './components/hamburger.mjs';
import { loggedIn } from './components/templates/loggedin.mjs';
import { logoutUser } from './components/Api/logout.mjs';
hamburgerAnimation();
// pageHelpers();
createEntryListing();
funcUserLogin();
loggedIn();
logoutUser();
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
