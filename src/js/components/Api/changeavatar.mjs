import { avatarForm, avatarErr, avatarInput } from '../document.mjs';
import { headersInfo } from './options.mjs';
import { profileAvatar } from '../urls.mjs';
import { msgAlert, msgOk } from '../error.mjs';

console.log(profileAvatar);
export function updateAvatar() {
    avatarForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(avatarForm);
        const formDataSeri = Object.fromEntries(formData);
        console.log(formDataSeri);
        try {
            const response = await fetch(profileAvatar, {
                method: 'PUT',
                headers: headersInfo,
                body: JSON.stringify(formDataSeri),
            });
            console.log(response.ok);
            // console.log(data);

            const verify = response.ok;
            if (verify !== false) {
                console.log(response);
                console.log('funker', verify);
                msgOk(response);
                avatarErr.innerHTML = '';
                avatarInput.value = '';
            } else {
                console.log('funka ikke', verify);
                console.log(response);
                msgAlert(response);
                avatarErr.innerHTML = `<span class="text-danger">
                                        ${response.statusText} Must be a valid Url
                                        </span>`;
            }
        } catch (err) {
            console.log(err);
        }
    });
}
