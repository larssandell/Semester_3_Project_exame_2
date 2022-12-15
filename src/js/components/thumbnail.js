import { thumbImg } from './document.js';

export function changeImageThumb() {
    thumbImg.addEventListener('click', (e) => {
        // console.log(e.target);
        const currentImg = document.querySelector('#current');
        const targetImg = e.target.closest('img');
        if (!targetImg) return;
        currentImg.src = e.target.src;
        // console.log(currentImg);
    });
}
