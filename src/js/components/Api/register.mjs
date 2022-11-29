import {
    formReg,
    regName,
    regEmail,
    regNameErr,
    regEmailErr,
    regPassErr,
    regPassword,
    okMsg,
} from '../document.mjs';
import { regUrl } from '../urls.mjs';
import { registerUser } from './apiCalls.mjs';
// import { headersInfo } from './options.mjs';
// import { userLogin } from './apiCalls.mjs';
// import { regUrl } from '../urls.mjs';
// import { loggedIn } from '../templates/loggedin.mjs';
import { emailVali, nameVali } from '../variables.mjs';
// import { btnLogin } from '../document.mjs';
// console.log(formLogin);

export function funcUserReg() {
    formReg.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(formReg);
        const formDataSeri = Object.fromEntries(formData);
        // console.log(formDataSeri);
        const email = formData.get('email');
        // const password = formData.get('password');
        const name = formData.get('name');
        const password = formData.get('password');
        // console.log(name);
        // console.log(email);
        console.log(password);
        if (nameVali(name) === false) {
            console.log('går ikke');
            regName.classList.add('bg-err-red');
            regNameErr.innerHTML = 'Can only have letters and _';
        } else {
            console.log('OK');
            regNameErr.innerHTML = '';
            regName.classList.remove('bg-err-red');
            regName.classList.add('bg-ok-green');
        }
        if (emailVali(email) === true) {
            console.log('OK');
            regEmail.classList.remove('bg-err-red');
            regEmail.classList.add('bg-ok-green');
            regEmailErr.innerHTML = ``;
        } else {
            regEmail.classList.remove('bg-ok-green');
            regEmail.classList.add('bg-err-red');
            regEmailErr.innerHTML = `<p>Domain must be stud.noroff.no</p>`;
        }
        if (password.length < 8) {
            console.log('password feil');
            regPassErr.innerHTML = `<p>Must be at least 8 characters</p>`;
            regPassword.classList.add('bg-err-red');
        } else {
            console.log('passord ok');
            regPassword.classList.add('bg-ok-green');
            regPassword.classList.remove('bg-err-red');
            regPassErr.innerHTML = '';
        }

        try {
            const response = await registerUser(regUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataSeri),
            });
            console.log(response);
            const data = response.statusCode;
            if (data === 400) {
                console.log('error kode 400');
            } else {
                okMsg.innerHTML = '';
                okMsg.innerHTML = `<h3 class="reg__ok">Registration Success</h3>`;
            }
        } catch (err) {
            console.log(err);
        }
    });
}
