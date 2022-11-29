import { listingsUrTwelv } from './components/urls.mjs';
import { getOption } from './components/Api/options.mjs';
import { hamburgerAnimation } from './components/hamburger.mjs';
import { loggedIn } from './components/templates/loggedin.mjs';
import { indexCards } from './components/templates.mjs';
import { loader } from './components/document.mjs';

hamburgerAnimation();
loggedIn();
async function getlistingsAll() {
    try {
        const response = await fetch(listingsUrTwelv, getOption);
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