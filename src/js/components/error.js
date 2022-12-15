import { alertMsg, errormsg } from './document.js';

export function showCloseErr() {
    errormsg.classList.add('showmsg');
    setTimeout(() => {
        // Closing the alert
        errormsg.classList.remove('showmsg');
        errormsg.classList.remove('alert-danger');
        errormsg.classList.remove('alert-success');
        alertMsg.innerHTML = '';
        // console.log('ferdig');
    }, 2800);
}

// login alert
export function okLogin() {
    errormsg.classList.add('alert-success');
    alertMsg.textContent = 'Login authorized';
    setTimeout(() => {
        showCloseErr();
    }, 20);
}
export function alertLogin() {
    errormsg.classList.add('alert-danger');
    alertMsg.textContent = 'Login unauthorized';
    setTimeout(() => {
        showCloseErr();
    }, 20);
}

/**
 * export function that makes An error msg
 * @param {parameter} response
 */

export function msgAlert(response) {
    errormsg.classList.remove('alert-success');
    errormsg.classList.add('alert-danger');
    alertMsg.textContent = `${response}`;
    setTimeout(() => {
        showCloseErr();
    }, 20);
}
export function msgOk(text, response) {
    errormsg.classList.remove('alert-danger');
    errormsg.classList.add('alert-success');
    alertMsg.textContent = `${text} ${response}`;
    setTimeout(() => {
        showCloseErr();
    }, 20);
}

// sessionStorage.setItem('key', 'value');
