import { apiCall } from './Api/apiCall.js';
import { headersAuth } from './Api/options.js';
import { viewMoreBtn } from './document.js';
import { listingsOffsetUrl } from './urls.js';
import { indexCards } from './templates.js';

export function viewMore() {
    viewMoreBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        try {
            const getResponse = await apiCall(
                listingsOffsetUrl(100, 12),
                'GET',
                headersAuth
            );
            console.log(getResponse);
            const getData = await getResponse.json();
            console.log(getData);
            for (let i = 0; i < getData.length; i++) {
                indexCards(getData, i, 'Ends at');
            }
        } catch (err) {
            console.log(err);
        } finally {
            viewMoreBtn.style.display = 'none';
        }
    });
}
