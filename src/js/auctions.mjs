import { listingsUrTwelv } from './components/urls.mjs';
import { getOption } from './components/Api/options.mjs';
import { pageHelpers } from './components/helpers/helpers.mjs';
import { loader } from './components/document.mjs';
import { hamburgerAnimation } from './components/hamburger.mjs';
import { createEntryListing } from './components/Api/createlisting.mjs';
import { searchFuncOne } from './components/search.mjs';
import { indexCards } from './components/templates.mjs';

searchFuncOne();
createEntryListing();
hamburgerAnimation();
pageHelpers();
async function getlistingsAll() {
    try {
        const response = await fetch(listingsUrTwelv, getOption);
        const data = await response.json();
        // console.log(data);
        if (response.ok !== true) {
            console.log('feil med API');
            console.log('data', data);
        }
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            console.log('data[i]', data[i]);
            console.log(data[i].media.length);
            if (data[i].media.length !== 0) {
                indexCards(data, i);
            }
            // else {
            //     indexCards(data, i);
            // }
            // if (data.media.length === 0) {
            //     console.log('object');
            // } else {
            //     data.forEach(function (data) {
            //         indexCards(data);
            //     });
            // }
        }
        loader.innerHTML = '';
    } catch (err) {
        console.log(err);
    }
}
getlistingsAll();
