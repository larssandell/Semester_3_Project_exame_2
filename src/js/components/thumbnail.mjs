import { thumbImg } from './document.mjs';

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

setTimeout(() => {
    changeImageThumb();
    // console.log(currentImg);
    // console.log(thumbImg);
    console.log('ferdig');
}, '1');
