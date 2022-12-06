import { getOption } from '../Api/options.mjs';
import { productSpecificAll } from '../urls.mjs';
import {
    productTitle,
    productDesc,
    productBid,
    productEnds,
    loader,
    cardWrapper,
} from '../document.mjs';

export async function getBid() {
    try {
        const response = await fetch(productSpecificAll, getOption);
        const data = await response.json();
        const status = response.ok;

        if (!status === false) {
            productTitle.innerHTML = `<h3>${data.title}</h3>`;
            productDesc.textContent = `${data.description}`;
            productBid.textContent = 'No bids';
            productEnds.textContent = `${data.endsAt}`;
            for (let i = 0; i < data.bids.length; i++) {
                console.log(data.bids[i]);
                const bids = data.bids[i].amount;
                console.log(bids);
                if (!Array.isArray(bids) || bids.length == 0) {
                    productBid.textContent = `${data.bids[i].amount}`;
                }
            }
            loader.innerHTML = '';
        } else {
            const error = data.errors[0];
            console.log('feiler');
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
