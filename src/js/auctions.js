import { getListingsUrl } from './components/urls.js';
import { headersInfo } from './components/Api/options.js';
import { pageHelpers } from './components/helpers/helpers.js';
import { loader } from './components/document.js';
import { hamburgerAnimation } from './components/hamburger.js';
import { createEntryListing } from './components/Api/createlisting.js';
import { searchFuncOne } from './components/search.js';
import { indexCards } from './components/templates.js';
import { apiCall } from './components/Api/apiCall.js';
import { viewMore } from './components/showmore.js';
import { filterAllBtn } from './components/Api/filter.js';

searchFuncOne();
createEntryListing();
hamburgerAnimation();
pageHelpers();
viewMore();
filterAllBtn();

async function getListing() {
    try {
        const getResponse = await apiCall(
            getListingsUrl(12),
            'GET',
            headersInfo
        );
        const getData = await getResponse.json();
        // console.log(getResponse);
        // console.log(getData);
        if (getResponse.ok !== true) {
            console.log('feil med API');
            console.log('data', getData);
        } else {
            // console.log(getdata);
            for (let i = 0; i < getData.length; i++) {
                indexCards(getData, i, 'Ends at');
            }
        }
        loader.innerHTML = '';
        return getData;
    } catch (err) {
        console.log(err);
    }
}
getListing();
