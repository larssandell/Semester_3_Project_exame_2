import { avatarForm, avatarErr, avatarInput } from '../document.js';
import { headersInfoAuth } from './options.js';
import { profileAvatar } from '../urls.js';
import { msgAlert, msgOk } from '../error.js';
import { reLoad } from '../helpers/settime.js';
import { apiCall } from './apiCall.js';

export function updateAvatar() {
    avatarForm.reset();
    avatarForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(avatarForm);
        const formDataSeri = Object.fromEntries(formData);
        // console.log(formData);
        // console.log(formDataSeri);
        try {
            const getResponse = await apiCall(
                profileAvatar,
                'PUT',
                headersInfoAuth,
                formDataSeri
            );
            const data = await getResponse.json();
            const verify = getResponse.ok;
            if (verify !== false) {
                // console.log(response);
                msgOk('Avatar Change: ', getResponse.statusText);
                avatarErr.innerHTML = '';
                avatarInput.value = '';
                reLoad(1500);
            } else {
                const errMsg = data.errors[0].message;
                msgAlert(errMsg);
                avatarErr.innerHTML = `<span class="text-danger">
                                        ${errMsg}
                                        </span>`;
            }
        } catch (err) {
            console.log(err);
        } finally {
            avatarForm.reset();
        }
    });
}
