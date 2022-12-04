import { alertMsg, errormsg } from './document.mjs';

export function showCloseErr() {
    errormsg.classList.add('showmsg');
    setTimeout(() => {
        // Closing the alert
        errormsg.classList.remove('showmsg');
    }, 2800);
}

// login alert
export function okLogin() {
    alertMsg.textContent = 'Login authorized';
    setTimeout(() => {
        showCloseErr();
    }, 10);
}
export function alertLogin() {
    errormsg.classList.remove('alert-success');
    errormsg.classList.add('alert-danger');
    alertMsg.textContent = 'Login unauthorized';
    setTimeout(() => {
        showCloseErr();
    }, 10);
}
export function msgAlert(response) {
    errormsg.classList.remove('alert-success');
    errormsg.classList.add('alert-danger');
    alertMsg.textContent = `${response.statusText}`;
    setTimeout(() => {
        showCloseErr();
    }, 10);
}
export function msgOk(response) {
    errormsg.classList.remove('alert-danger');
    errormsg.classList.add('alert-success');
    alertMsg.textContent = `${response.statusText}`;
    setTimeout(() => {
        showCloseErr();
    }, 10);
}

// sessionStorage.setItem('key', 'value');
