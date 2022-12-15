import { headersInfo } from './options.js';
import { productSpecific } from '../urls.js';
import { productBid, loader, cardWrapper } from '../document.js';
import { apiCall } from './apiCall.js';

export async function getBid() {
    try {
        const getResponse = await apiCall(productSpecific, 'GET', headersInfo);
        const getData = await getResponse.json();
        const status = getResponse.ok;
        const bidsArray = getData.bids;
        let lastElement = bidsArray[bidsArray.length - 1];

        if (status !== false) {
            productBid.textContent = `${lastElement.amount}`;
            loader.innerHTML = '';
        } else {
            const error = getData.errors[0];
            cardWrapper.innerHTML = '';
            loader.innerHTML = '';
            cardWrapper.innerHTML = `<div class="text-center">
                                        <p>We are sorry the listing was not found:</p>
                                        Message: 
                                        <span class="text-danger">${error.message}</span>
                                        <br> 
                                        Error:<span class="text-danger"> ${status}</span>
                                    </div>`;
        }
    } catch (err) {
        console.log(err);
    }
}
