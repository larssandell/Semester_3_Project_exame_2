import { apiCall } from './apiCall.js';
import { productSpecific } from '../urls.js';
import {
    userName,
    loader,
    productEnds,
    sellerName,
    productTitle,
    productDesc,
    bidCounter,
    productBid,
    mainImage,
    thumbImgs,
    formBid,
    btnDel,
    showBidBtn,
    productwrapper,
} from '../document.js';
import { timeDateConvI } from '../datetime.js';
import { bidders } from '../templates/bidsmade.js';
import { sortArray } from '../helpers/sort.js';
import { deletelisting } from './deletebtn.js';
import { headersInfo } from './options.js';
import { catchError } from './catcherror.js';

export async function ShowSpecificListing() {
    try {
        const getResponse = await apiCall(productSpecific, 'GET', headersInfo);
        // console.log(getResponse);
        const getData = await getResponse.json();
        // console.log(getData.errors);
        if (getResponse.ok === false) {
            catchError(getData, productwrapper);
            return;
        }
        // console.log(userName);

        if (userName === null) {
            formBid.innerHTML = `<p>Register to bid</p>`;
        }
        // console.log(getData.seller.name);

        if (userName === getData.seller.name) {
            deletelisting();
            console.log('eier');
            formBid.innerHTML = '';
            btnDel.style.display = 'block';
        }

        loader.innerHTML = '';
        document.title = `Auction Wars | ${getData.title}`;
        timeDateConvI(getData);
        const converted = timeDateConvI(getData);
        productEnds.textContent = `Ends at: ${converted}`;
        sellerName.innerText = `Seller: ${getData.seller.name}`;
        productTitle.innerHTML = `<h3>${getData.title}</h3>`;
        productDesc.textContent = `${getData.description}`;
        bidCounter.innerHTML = `<p>Number of bids: ${getData._count.bids}`;
        // console.log(getData.bids.length);
        // console.log(getData.bids);
        const bidsArray = getData.bids;
        sortArray(bidsArray);
        // console.log('etter sort', bidsArray);
        const reverse = bidsArray.reverse();
        // console.log('reverse', reverse);

        if (getData.bids.length === 0) {
            productBid.textContent = 'No bids';
            showBidBtn.style.display = 'none';
        } else {
            showBidBtn.style.display = 'block';
            productBid.textContent = `${getData.bids[0].amount}`;
            for (let a = 0; a < bidsArray.length; a++) {
                // console.log('bids a', bidsArray[a]);
                bidders(reverse, a);
            }
        }

        // console.log(getData.media[0]);
        if (getData.media[0] === undefined) {
            mainImage.innerHTML = `<img src="./img/no-image.png"
                                         width="250"
                                         alt="No image provided"
                                         id="current"
                                         class="rounded-1 img-fluid current"
                                     />`;
            // console.log('ikke noe media');
        } else {
            // console.log('her er det bilde');
            mainImage.innerHTML = `<img src="${getData.media[0]}"
                                         width="250"
                                         onerror="this.src = './img/no-image.png';"
                                         alt="${getData.title}"
                                         id="current"
                                         class="rounded-1 img-fluid current"
                                     />`;
        }
        for (let i = 0; i < getData.media.length; i++) {
            // console.log(getData.media.length);
            thumbImgs.innerHTML += `<img
                                            onerror="this.src = './img/no-image.png';"
                                            src="${getData.media[i]}"
                                            alt="${getData.title}"
                                            width="70"
                                            id="change__image"
                                            class="rounded-1 img-fluid small"
                                        />`;
        }

        // console.log(getData.bids);
    } catch (err) {
        console.log(err);
    }
}
