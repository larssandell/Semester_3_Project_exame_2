/**
 *
 * @param {string} a - first element
 * @param {string} b - secound element
 * @returns diffrence between amount
 */

function sortFunc(a, b) {
    return a.amount - b.amount;
}

export function sortArray(array) {
    array.sort(sortFunc);
}
