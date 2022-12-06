import { listingsUrTwelv } from './components/urls.mjs';
import { getOption } from './components/Api/options.mjs';
import { pageHelpers } from './components/helpers/helpers.mjs';
import { indexCards } from './components/templates.mjs';
import { loader } from './components/document.mjs';
import { hamburgerAnimation } from './components/hamburger.mjs';
import { createEntryListing } from './components/Api/createlisting.mjs';

createEntryListing();
hamburgerAnimation();
pageHelpers();
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
