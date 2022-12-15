import {
    formLogin,
    loginEmail,
    emailError,
    passwordError,
    passwordInput,
} from '../document.js';
import { headersInfo } from './options.js';
import { loginUrl } from '../urls.js';
import { loggedIn } from '../templates/loggedin.js';
import { emailVali } from '../variables.js';
import { okLogin, alertLogin } from '../error.js';
import { apiCall } from './apiCall.js';

export function funcUserLogin() {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(formLogin);
        const formDataSeri = Object.fromEntries(formData);
        // console.log(formDataSeri);
        const email = formData.get('email');
        const password = formData.get('password');
        // console.log(email);
        // console.log(email);
        // console.log(password);
        let errorCount = 0;
        // console.log(errorCount);
        if (emailVali(email)) {
            loginEmail.classList.remove('border-danger');
            loginEmail.classList.add('border-success');
            emailError.textContent = '';
        } else {
            loginEmail.classList.remove('border-success');
            loginEmail.classList.add('border-danger');
            emailError.textContent = 'Domain must be stud.noroff.no';
            errorCount++;
        }
        if (password.length < 8) {
            passwordError.textContent = 'Must be at least 8 characters';
            passwordInput.classList.add('border-danger');
            errorCount++;
        } else {
            passwordInput.classList.remove('border-danger');
            passwordInput.classList.add('border-success');
            passwordError.textContent = '';
        }
        // console.log(errorCount);
        if (errorCount === 0) {
            try {
                const getResponse = await apiCall(
                    loginUrl,
                    'POST',
                    headersInfo,
                    formDataSeri
                );
                const getData = await getResponse.json();
                const userToken = getData.accessToken;
                const userName = getData.name;
                const userCredits = getData.credits;
                const valiLogin = getResponse.ok;

                if (valiLogin !== false) {
                    localStorage.setItem('userName', userName);
                    localStorage.setItem('accessToken', userToken);
                    localStorage.setItem('credits', userCredits);
                    okLogin();
                    loggedIn();
                    setTimeout(() => {
                        formLogin.reset();
                        window.location.reload();
                    }, 3000);
                } else {
                    alertLogin();
                }
            } catch (err) {
                console.log(err);
            }
        }
    });
}
