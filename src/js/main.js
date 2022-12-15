import { getListingsUrl } from './components/urls.js';
import { headersInfo } from './components/Api/options.js';
import { loader } from './components/document.js';
import { indexCards } from './components/templates.js';
import { createEntryListing } from './components/Api/createlisting.js';
import { hamburgerAnimation } from './components/hamburger.js';
import { apiCall } from './components/Api/apiCall.js';
import { pageHelpers } from './components/helpers/helpers.js';

hamburgerAnimation();
createEntryListing();
pageHelpers();

async function getLstings() {
    try {
        const getResponse = await apiCall(
            getListingsUrl(4),
            'GET',
            headersInfo
        );
        const getData = await getResponse.json();
        // console.log(getData);
        // console.log(getResponse.ok);
        for (let i = 0; i < getData.length; i++) {
            // console.log('data[i]', getData[i]);
            indexCards(getData, i, 'Ends at');
            loader.innerHTML = '';
        }
    } catch (err) {
        console.log(err);
    }
}
getLstings();
