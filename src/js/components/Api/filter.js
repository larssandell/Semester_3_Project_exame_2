import { apiCall } from './apiCall.js';
import { listingUrlNoFilter } from '../urls.js';
import { filterAll } from '../document.js';
import { headersInfo } from './options.js';
import { indexCards } from '../templates.js';

export function filterAllBtn() {
    filterAll.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const getAll = await apiCall(
                listingUrlNoFilter,
                'GET',
                headersInfo
            );
            const getDataAll = await getAll.json();
            // console.log(getDataAll);
            // console.log(getAll);
            for (let i = 0; i < getDataAll.length; i++) {
                indexCards(getDataAll, i, 'Ends at');
            }
        } catch (err) {
            console.log(err);
        }
    });
}
