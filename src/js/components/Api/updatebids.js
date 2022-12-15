import { apiCall } from './apiCall.js';
import { productSpecific } from '../urls.js';
import { bidders } from '../templates/bidsmade.js';
import { sortArray } from '../helpers/sort.js';
import { productBid, biddersWrapper, bidCounter } from '../document.js';

export async function updateBids() {
    biddersWrapper.innerHTML = '';
    try {
        const getResponse = await apiCall(productSpecific, 'GET');
        const getData = await getResponse.json();
        // console.log(getData);
        bidCounter.innerHTML = `<p>Number of bids: ${getData._count.bids}`;
        const bidsArray = getData.bids;
        sortArray(bidsArray);
        // console.log('sorted', bidsArray);
        const reverse = bidsArray.reverse();
        if (getData.bids.length === 0) {
            productBid.textContent = 'No bids';
        } else {
            productBid.textContent = `${getData.bids[0].amount}`;
            for (let a = 0; a < bidsArray.length; a++) {
                // console.log('bids a', bidsArray[a]);
                bidders(reverse, a);
            }
        }
    } catch (err) {
        console.log(err);
    }
}
