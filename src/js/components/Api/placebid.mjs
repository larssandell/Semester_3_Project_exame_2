import { bidForm, token } from '../document.mjs';
import { placeBidUrl } from '../urls.mjs';
import { headersInfo } from './options.mjs';
console.log(placeBidUrl);
console.log(bidForm);
export function placeABid() {
    bidForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(bidForm);
        const formDataSeri = Object.fromEntries(bidForm);
        console.log(formData);

        try {
            const response = await fetch(placeBidUrl, {
                method: 'POST',
                headers: headersInfo,
                body: JSON.stringify(formDataSeri),
                Authorization: `Bearer ${token}`,
            });
            const data = response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    });
}
