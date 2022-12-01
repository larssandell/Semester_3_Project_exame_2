import { pageHelpers } from './components/helpers.mjs';
import { getOption } from './components/Api/options.mjs';
import { productSpecificAll } from './components/urls.mjs';
import {
    mainImage,
    productTitle,
    productDesc,
    productBid,
    productEnds,
    thumbImgs,
    loader,
} from './components/document.mjs';
import { placeABid } from './components/Api/placebid.mjs';
import { changeImageThumb } from './components/thumbnail.mjs';

pageHelpers;

async function getProduct() {
    try {
        const response = await fetch(productSpecificAll, getOption);
        const data = await response.json();
        // console.log(response);
        // console.log(data);
        document.title = `Auction Wars | ${data.title}`;
        // console.log(data.bids);
        mainImage.innerHTML = `<img src="${data.media[0]}"
                            width="250"
                            onerror="this.src = './img/no-image.png';"
                            alt=""
                            id="current"
                            class="rounded-1 img-fluid current"
                            />`;

        for (let i = 0; i < data.media.length; i++) {
            // console.log(data.media[i]);
            thumbImgs.innerHTML += `<img
                                            
                                            onerror="this.src = './img/no-image.png';"
                                            src="${data.media[i]}"
                                            width="70"
                                            id="change__image"
                                            class="rounded-1 img-fluid small"
                                            
                                        />`;
        }
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
    } catch (err) {
        console.log(err);
    }
}
getProduct();
placeABid();
changeImageThumb();
