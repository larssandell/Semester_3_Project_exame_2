import { bidForm, bidInput, token } from '../document.mjs';
import { placeBidUrl } from '../urls.mjs';
// import { headersInfo } from './options.mjs';
import { getBid } from './getbid.mjs';
// console.log(placeBidUrl);
// console.log(bidForm);
export function placeABid() {
    bidForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const getInput = bidInput.value;
        const toNumber = Number(getInput);
        const bidObject = { amount: toNumber };
        console.log(getInput);
        console.log(bidObject);

        try {
            const response = await fetch(placeBidUrl, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(bidObject),
            });
            const data = response.json();
            // const msg = data.message;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
            }
            // status = status Code 200 or 400
            // console.log('response', response);
            // console.log('data', data.status);
        } catch (err) {
            console.log(err);
        } finally {
            bidInput.value = '';
            setTimeout(() => {
                getBid();
            }, 500);
        }
    });
}

// const amountValue = bidInput.value;
// const amountNum = Number(amountValue);
// const bidAmount = { amount: amountNum };
// const creditNum = parseFloat(credit);
// console.log(typeof amountNum);
// console.log(typeof creditNum);
// if (amountNum <= creditNum) {}
