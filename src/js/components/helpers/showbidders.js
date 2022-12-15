import { biddersWrapper } from '../document.js';
export function showBiddersFunc() {
    const showBidders = document.getElementById('show__bidders');
    showBidders.addEventListener('click', (e) => {
        e.preventDefault();
        biddersWrapper.classList.toggle('showBidder');
    });
}
