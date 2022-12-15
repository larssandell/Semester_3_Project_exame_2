import { loader } from '../document.js';

export function catchError(ele, container) {
    const error = ele.errors[0];
    // console.log('feiler');
    container.innerHTML = '';
    loader.innerHTML = '';
    container.innerHTML = `<div class="text-center">
                                            <p>We are sorry the listing was not found:</p>
                                            Message: 
                                            <span class="text-danger">${error.message}</span>
                                            <br> 
                                            Error:<span class="text-danger"> ${error.status}</span>
                                        </div>`;
}
