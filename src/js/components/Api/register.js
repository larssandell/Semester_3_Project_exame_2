import {
    formReg,
    regName,
    regEmail,
    regNameErr,
    regEmailErr,
    regPassErr,
    regPassword,
    regError,
} from '../document.js';
import { msgOk, msgAlert } from '../error.js';
import { regUrl } from '../urls.js';
import { emailVali, nameVali } from '../variables.js';
import { apiCall } from './apiCall.js';
import { headersAuth } from './options.js';

export function funcUserReg() {
    formReg.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(formReg);
        const email = formData.get('email');
        const name = formData.get('name');
        const password = formData.get('password');
        let valiError = 0;

        if (nameVali(name) === false) {
            // console.log('går ikke');
            regName.classList.add('border-danger');
            regNameErr.innerHTML = 'Can only have letters and _';
            valiError++;
        } else {
            // console.log('OK');
            regNameErr.innerHTML = '';
            regName.classList.remove('border-danger');
            regName.classList.add('border-success');
        }
        if (emailVali(email) === true) {
            // console.log('OK');
            regEmail.classList.remove('border-danger');
            regEmail.classList.add('border-success');
            regEmailErr.innerHTML = ``;
        } else {
            regEmail.classList.remove('border-success');
            regEmail.classList.add('border-danger');
            regEmailErr.innerHTML = `<p>Domain must be stud.noroff.no</p>`;
            valiError++;
        }
        if (password.length < 8) {
            // console.log('password feil');
            regPassErr.innerHTML = `<p>Must be at least 8 characters</p>`;
            regPassword.classList.remove('border-success');
            regPassword.classList.add('border-danger');
            valiError++;
        } else {
            // console.log('passord ok');
            regPassword.classList.add('border-success');
            regPassword.classList.remove('border-danger');
            regPassErr.innerHTML = '';
        }
        console.log(valiError);
        if (valiError === 0) {
            const formDataSeri = Object.fromEntries(formData);
            // console.log('ok');
            try {
                const getReponse = await apiCall(
                    regUrl,
                    'POST',
                    headersAuth,
                    formDataSeri
                );
                const getData = await getReponse.json();
                // console.log('getData', getData);
                // console.log(getReponse.ok);
                // console.log(getData.errors[0]);

                // const status = getReponse.statusCode;
                // console.log(status);
                if (getReponse.ok === false) {
                    const message = getData.errors[0].message;
                    msgAlert(message);
                    regError.innerHTML = `<p>${message}</p>`;
                    regName.classList.add('border-danger');
                    regEmail.classList.add('border-danger');
                } else {
                    msgOk('User Created', name);
                    regError.innerHTML = '';
                    regName.classList.remove('border-danger');
                    regEmail.classList.remove('border-danger');
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log('ikke ok');
        }
    });
}
