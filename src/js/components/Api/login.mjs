import {
    formLogin,
    emailInput,
    emailError,
    passwordError,
    passwordInput,
} from '../document.mjs';
import { headersInfo } from './options.mjs';
// import { userLogin } from './apiCalls.mjs';
import { loginUrl } from '../urls.mjs';
import { loggedIn } from '../templates/loggedin.mjs';
import { emailVali } from '../variables.mjs';
// import { localStorage } from '../helpers/localstorage.mjs';
import { okLogin, alertLogin } from '../error.mjs';
// import { pageHelpers } from '../helpers/helpers.mjs';
// console.log(formLogin);
// pageHelpers();
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
        if (emailVali(email)) {
            emailInput.classList.remove('border-danger');
            emailInput.classList.add('border-success');
            emailError.textContent = '';
        } else {
            emailInput.classList.remove('border-success');
            emailInput.classList.add('border-danger');
            emailError.textContent = 'Domain must be stud.noroff.no';
        }
        if (password.length < 8) {
            passwordError.textContent = 'Must be at least 8 characters';
            passwordInput.classList.add('border-danger');
        } else {
            passwordInput.classList.remove('border-danger');
            passwordInput.classList.add('border-success');
            passwordError.textContent = '';
        }

        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: headersInfo,
                body: JSON.stringify(formDataSeri),
            });
            const data = await response.json();
            const userToken = data.accessToken;
            const userName = data.name;
            const userCredits = data.credits;
            const valiLogin = response.ok;
            console.log('return ok', valiLogin);
            if (valiLogin !== false) {
                localStorage.setItem('userName', userName);
                localStorage.setItem('accessToken', userToken);
                localStorage.setItem('credits', userCredits);
                okLogin();
                loggedIn();
                setTimeout(() => {
                    location.reload();
                }, 3000);
                console.log('inne', valiLogin);
            } else {
                console.log('feil', valiLogin);
                alertLogin();
            }
            // console.log(data);
            // console.log(response.status);
            // console.log(response);
        } catch (err) {
            console.log(err);
        }
    });
}
