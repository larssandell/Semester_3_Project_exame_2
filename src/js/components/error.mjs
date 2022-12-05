import { alertMsg, errormsg } from './document.mjs';

export function showCloseErr() {
    errormsg.classList.add('showmsg');
    setTimeout(() => {
        // Closing the alert
        errormsg.classList.remove('showmsg');
        errormsg.classList.remove('alert-danger');
        errormsg.classList.remove('alert-success');
        alertMsg.textContent = '';
        console.log('ferdig');
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
    alertMsg.textContent = '';
    errormsg.classList.add('alert-danger');
    alertMsg.textContent = 'Login unauthorized';
    setTimeout(() => {
        showCloseErr();
    }, 20);
}
export function msgAlert(response) {
    errormsg.classList.remove('alert-success');
    errormsg.classList.add('alert-danger');
    alertMsg.textContent = `${response.statusText}`;
    setTimeout(() => {
        showCloseErr();
    }, 20);
}
export function msgOk(response) {
    errormsg.classList.remove('alert-danger');
    errormsg.classList.add('alert-success');
    alertMsg.textContent = `${response.statusText}`;
    setTimeout(() => {
        showCloseErr();
    }, 20);
}

// sessionStorage.setItem('key', 'value');
