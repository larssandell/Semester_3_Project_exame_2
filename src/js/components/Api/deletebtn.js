import { btnDel } from '../document.js';
import { apiCall } from './apiCall.js';
import { deleteList } from '../urls.js';
import { headersInfoAuth } from './options.js';
import { msgOk } from '../error.js';

export async function deletelisting() {
    btnDel.addEventListener('click', async () => {
        try {
            const getResponse = await apiCall(
                deleteList,
                'DELETE',
                headersInfoAuth
            );
            console.log(getResponse);
            if (getResponse.ok !== true) {
                // console.log('err');
            } else {
                msgOk(`"Listing Deleted: "${getResponse.ok}`);
                // console.log('deleted');
                setTimeout(() => {
                    document.location.href = '/index.html';
                }, 1500);
            }
        } catch (err) {
            console.log(err);
        }
    });
}
