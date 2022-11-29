import { listingsUrlPromo } from './components/urls.mjs';
import { getOption } from './components/Api/options.mjs';
import { loader } from './components/document.mjs';
import { pageHelpers } from './components/helpers.mjs';
import { indexCards } from './components/templates.mjs';

pageHelpers;

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
