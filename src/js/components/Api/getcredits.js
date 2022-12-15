import { apiCall } from './apiCall.mjs';
import { getProfileUrl } from '../urls.js';
import { headersInfoAuth } from './options.js';

export async function getCredits() {
    const userName = localStorage.getItem('userName');
    // console.log(userCred, userName);
    try {
        const getResponse = await apiCall(
            getProfileUrl(userName),
            'GET',
            headersInfoAuth
        );
        const getData = await getResponse.json();

        if (getResponse.ok === true) {
            const credits = getData.credits;
            localStorage.setItem('credits', credits);
            // console.log('credits', credits);
        }
    } catch (err) {
        console.log(err);
    }
}
