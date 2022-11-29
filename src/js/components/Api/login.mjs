import {
    formLogin,
    emailInput,
    emailError,
    passwordError,
    passwordInput,
    accountLink,
} from '../document.mjs';
import { headersInfo } from './options.mjs';
import { userLogin } from './apiCalls.mjs';
import { loginUrl } from '../urls.mjs';
import { loggedIn } from '../templates/loggedin.mjs';
import { emailVali } from '../variables.mjs';
// import { btnLogin } from '../document.mjs';
// console.log(formLogin);

export function funcUserLogin() {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(formLogin);
        const formDataSeri = Object.fromEntries(formData);
        // console.log(formDataSeri);
        const email = formData.get('email');
        const password = formData.get('password');
        // console.log(email);
        // console.log(password);
        if (emailVali(email) === true) {
            console.log('OK');
            emailInput.classList.remove('bg-err-red');
            emailInput.classList.add('bg-ok-green');
            emailError.innerHTML = ``;
        } else {
            emailInput.classList.remove('bg-ok-green');
            emailInput.classList.add('bg-err-red');
            emailError.innerHTML = `<p>Domain must be stud.noroff.no</p>`;
        }
        if (password.length < 8) {
            passwordError.innerHTML = `<p>Must be at least 8 characters</p>`;
            passwordInput.classList.add('bg-err-red');
        } else {
            passwordInput.classList.remove('bg-err-red');
            passwordInput.classList.add('bg-ok-green');
            passwordError.innerHTML = '';
        }
        try {
            const response = await userLogin(loginUrl, {
                method: 'POST',
                headers: headersInfo,
                body: JSON.stringify(formDataSeri),
            });
            // console.log(response);
            if (response.statusCode === 401) {
                console.log('if');
            } else {
                console.log('else');
                loggedIn();
                accountLink.classList.remove('disabled');
                // loginSucc.hide();
                // btnLogin.style.display = 'none';
                // btnLogout.style.display = 'block';
                // btnRegister.style.display = 'none';
            }
        } catch (err) {
            console.log(err);
        }
    });
}
