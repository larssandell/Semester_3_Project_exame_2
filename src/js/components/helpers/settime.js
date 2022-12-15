/**
 * reload page function
 * @param {number} sec how many sec timeout, 1000=1s
 */

export function reLoad(sec) {
    setTimeout(() => {
        window.location.reload();
    }, sec);
}
