import {
    createForm,
    createTitle,
    createTitleErr,
    endsAtInput,
    errTime,
} from '../document.js';
import { apiCall } from './apiCall.js';
import { createListingUrl } from '../urls.js';
import { headersAuth } from './options.js';
import { msgAlert, msgOk } from '../error.js';
import { reLoad } from '../helpers/settime.js';

export function createEntryListing() {
    createForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // const myTime = document.getElementById('endsAt');
        const formData = new FormData(createForm);
        const fdTitle = formData.get('title');
        // const fdEndsat = formData.get('endsAt');
        const fdEndsat = endsAtInput.value;
        // console.log(fdEndsat);
        const fdDesc = formData.get('description');
        const fdMedia = formData.getAll('media');
        let valiCounter = 0;

        if (fdTitle.length === 0) {
            createTitleErr.innerHTML = `<p>Title is required</p>`;
            createTitle.classList.remove('border-success');
            createTitle.classList.add('border-danger');
            valiCounter++;
        } else {
            createTitle.classList.remove('border-danger');
            createTitle.classList.add('border-success');
            createTitleErr.innerHTML = '';
        }

        if (fdEndsat === '') {
            endsAtInput.classList.remove('border-success');
            endsAtInput.classList.add('border-danger');
            errTime.innerHTML = `<p>must be valid date</p>`;
        } else {
            endsAtInput.classList.remove('border-danger');
        }

        const isoDateString = new Date(fdEndsat).toISOString();
        // console.log(isoDateString);
        const dateNow = new Date();
        const toString = dateNow.toISOString();
        // console.log('to iso', toString);

        if (isoDateString >= toString) {
            console.log('object');
            endsAtInput.classList.remove('border-danger');
            endsAtInput.classList.add('border-success');
            errTime.innerHTML = '';
        } else {
            console.log('nei');
            endsAtInput.classList.remove('border-success');
            endsAtInput.classList.add('border-danger');
            errTime.innerHTML = `<p>Must be newer date</p>`;
            valiCounter++;
        }

        console.log(valiCounter);
        if (valiCounter === 0) {
            const filtered = fdMedia.filter(function (ele) {
                return ele;
            });
            const sendObj = {
                title: fdTitle,
                description: fdDesc,
                endsAt: isoDateString,
                media: filtered,
            };
            // console.log(sendObj);
            try {
                const getResponse = await apiCall(
                    createListingUrl,
                    'POST',
                    headersAuth,
                    sendObj
                );
                // console.log(getResponse);
                // const getData = getResponse.json();
                // console.log(getData);

                if (getResponse.ok === false) {
                    msgAlert('Error: ', getResponse.statusText);
                } else {
                    msgOk('Listing: ', getResponse.statusText);
                    reLoad(1500);
                    createForm.reset();
                }
            } catch (err) {
                console.log(err);
            }
        }
    });
}
