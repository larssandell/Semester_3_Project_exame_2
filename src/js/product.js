import { pageHelpers } from './components/helpers/helpers.mjs';
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
    cardWrapper,
} from './components/document.mjs';
import { placeABid } from './components/Api/placebid.mjs';
import { changeImageThumb } from './components/thumbnail.mjs';
// import { showCloseErr } from './components/error.mjs';
import { hamburgerAnimation } from './components/hamburger.mjs';

hamburgerAnimation();
pageHelpers();

async function getProduct() {
    try {
        const response = await fetch(productSpecificAll, getOption);
        const data = await response.json();
        const status = response.ok;
        // console.log(response.status);
        // console.log(response.ok);
        // console.log(data);
        // console.log(data.statusCode);
        // console.log(error.message);
        if (!status === false) {
            console.log('OK');
            document.title = `Auction Wars | ${data.title}`;
            // console.log(data.bids);
            mainImage.innerHTML = `<img src="${data.media[0]}"
                            width="250"
                            onerror="this.src = './img/no-image.png';"
                            alt="${data.title}"
                            id="current"
                            class="rounded-1 img-fluid current"
                            />`;

            for (let i = 0; i < data.media.length; i++) {
                // console.log(data.media);
                thumbImgs.innerHTML += `<img

                                            onerror="this.src = './img/no-image.png';"
                                            src="${data.media[i]}"
                                            alt="${data.title}"
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
                if (!Array.isArray(bids) || bids.length === 0) {
                    productBid.textContent = `${data.bids[i].amount}`;
                    console.log(data.bids[i]);
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
getProduct();
placeABid();
changeImageThumb();
