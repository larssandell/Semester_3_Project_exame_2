import { createForm, token } from '../document.mjs';
// import { listingsUrl } from '../urls.mjs';
// import { headersInfo } from './options.mjs';
// console.log(headersInfo);

export function createEntryListing() {
    createForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // const myTime = document.getElementById('endsAt');
        const formData = new FormData(createForm);
        const fdTitle = formData.get('title');
        const fdEndsat = formData.get('endsAt');
        const fdDesc = formData.get('description');
        const fdMedia = formData.getAll('media');
        console.log(fdEndsat);
        const isoDateString = new Date(fdEndsat).toISOString();
        console.log(isoDateString);

        // if (title.length === 0) {
        //     createErr.textContent = 'Title is required';
        // }
        // if (endsat.length === 0) {
        //     createErr.textContent = 'date required';
        // }
        const filtered = fdMedia.filter(function (ele) {
            return ele;
        });
        const sendObj = {
            title: fdTitle,
            description: fdDesc,
            endsAt: isoDateString,
            media: filtered,
        };
        console.log(sendObj);
        const response = await fetch(
            'https://api.noroff.dev/api/v1/auction/listings',
            {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(sendObj),
            }
        );
        const data = response.json();
        console.log('data', data);
        console.log('response', response);
        // createForm.rest();
    });
}
