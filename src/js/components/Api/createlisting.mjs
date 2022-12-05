import {
    createForm,
    mediaOne,
    mediaTwo,
    mediaThree,
    token,
} from '../document.mjs';
// import { listingsUrl } from '../urls.mjs';
// import { headersInfo } from './options.mjs';
// console.log(headersInfo);
export function createEntryListing() {
    createForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(createForm);
        const formDataSeri = Object.fromEntries(formData);
        const fdTitle = formData.get('title');
        const fdEndsat = formData.get('endsAt');
        const fdDesc = formData.get('description');
        const imgOne = mediaOne.value;
        const imgTwo = mediaTwo.value;
        const imgThree = mediaThree.value;
        const imgArray = [imgOne, imgTwo, imgThree];
        const isoDateString = new Date(fdEndsat).toISOString();
        console.log(isoDateString);
        console.log(imgArray);
        function arrayIsEmpty(array) {
            //If it is an array, check its length property
            if (array.length === 0) {
                //Return TRUE if the array is empty
                return true;
            }
            //Otherwise, return FALSE.
            return false;
        }

        // if (title.length === 0) {
        //     createErr.textContent = 'Title is required';
        // }
        // if (endsat.length === 0) {
        //     createErr.textContent = 'date required';
        // }

        const filtered = imgArray.filter(function (ele) {
            return ele;
        });
        console.log('filtered', filtered);
        if (arrayIsEmpty(filtered) === false) {
            const sendObj = {
                title: fdTitle,
                description: fdDesc,
                endsAt: isoDateString,
                media: filtered,
            };
            console.log(sendObj);
            let objFromEnt = JSON.parse(JSON.stringify(sendObj));
            console.log('objJson', objFromEnt);
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
        } else {
            // console.log('Ingen array');
            console.log(formData);
            formData.append('endsAt', isoDateString);
            console.log(formData);
            const response = await fetch(
                'https://api.noroff.dev/api/v1/auction/listings',
                {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(formDataSeri),
                }
            );
            const data = response.json();
            console.log('data', data);
            console.log('response', response);
        }
    });
}

//         if (title.length === 0) {
//             createErr.textContent = 'Title is required';
//         }
//         if (endsat.length === 0) {
//             createErr.textContent = 'date required';
//         }
