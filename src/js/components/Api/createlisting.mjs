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

const myTime = document.getElementById('endsAt');
export function createEntryListing() {
    createForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formInputs = document
            .getElementById('create__entry')
            .querySelectorAll('input[value]');
        console.log(formInputs);

        const formData = new FormData(createForm);

        const fdTitle = formData.get('title');
        const fdEndsat = formData.get('endsAt');
        const fdDesc = formData.get('description');
        const imgOne = mediaOne.value;
        const imgTwo = mediaTwo.value;
        const imgThree = mediaThree.value;
        const imgArray = [imgOne, imgTwo, imgThree];
        const time = myTime.value;
        console.log(time);
        console.log(fdEndsat);
        const isoDateString = new Date(fdEndsat).toISOString();
        const isoDateString2 = new Date(time).toISOString();
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
            const objFromEnt = JSON.parse(JSON.stringify(sendObj));
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
            // createForm.rest();
        } else {
            // console.log('Ingen array');
            console.log(isoDateString2);
            console.log(formData);
            formData.append('endsAt', isoDateString2);
            const formDataSeri = Object.fromEntries(formData);
            console.log(formData);
            console.log(formDataSeri);
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
            // createForm.rest();
        }
    });
}

//         if (title.length === 0) {
//             createErr.textContent = 'Title is required';
//         }
//         if (endsat.length === 0) {
//             createErr.textContent = 'date required';
//         }
