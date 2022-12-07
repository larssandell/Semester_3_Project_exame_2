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
        console.log(response.ok);
        for (let i = 0; i < data.length; i++) {
            console.log('data[i]', data[i]);
            console.log(data[i].media.length);
            if (data[i].media.length !== 0) {
                indexCards(data, i);
                loader.innerHTML = '';
            }
        }

        // if (response.ok !== true) {
        //     console.log('feil med API');
        // } else {
        //     console.log('du fikk kontakt');
        //     loader.innerHTML = '';
        //     console.log(data);
        //     data.forEach(function (data) {
        //         indexCards(data);
        //     });
        // }
    } catch (err) {
        console.log(err);
    }
}
getlistingsAll();
