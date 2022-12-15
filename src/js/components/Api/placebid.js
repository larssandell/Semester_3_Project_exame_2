import { bidForm, bidInput } from '../document.js';
import { placeBidUrl } from '../urls.js';
import { apiCall } from './apiCall.js';
import { getBid } from './getbid.js';
import { msgAlert, msgOk } from '../error.js';
import { headersInfoAuth } from './options.js';
import { updateBids } from './updatebids.js';

export function placeABid() {
    bidForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const getInput = bidInput.value;
        const toNumber = Number(getInput);
        const bidObject = { amount: toNumber };
        const bidCheck = localStorage.getItem('credits');

        if (toNumber < bidCheck) {
            // console.log('im RICH!!', getInput, bidCheck);
            try {
                const getResponse = await apiCall(
                    placeBidUrl,
                    'POST',
                    headersInfoAuth,
                    bidObject
                );
                const getData = await getResponse.json();
                // console.log(getResponse);
                // console.log(getData);
                const respTxt = getResponse.statusText;
                const respOk = getResponse.ok;
                // console.log(respOk);

                if (respOk !== true) {
                    const errorMsg = getData.errors[0].message;
                    // console.log(bidError);
                    msgAlert(errorMsg);
                } else {
                    // console.log(respTxt);
                    msgOk('Bid Accepted: ', respTxt);
                    bidInput.value = '';
                    setTimeout(() => {
                        getBid();
                        updateBids();
                    }, 500);
                }
            } catch (err) {
                console.log(err);
            }
        }
    });
}
