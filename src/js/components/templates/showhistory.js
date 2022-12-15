import { historyHtml } from './historytemp.js';
export const histList = document.getElementById('history__list');

export function showHistoryListings(data) {
    // console.log('showHistoryListings');
    // console.log('showHistoryListings data', data);
    const listArray = data.listings;
    // console.log('listArray', listArray);
    // console.log(data.listings.title);
    if (listArray.length !== 0) {
        // console.log(data.wins.length);
        listArray.forEach(function (ele) {
            historyHtml(histList, ele, 0);
        });
    } else {
        // console.log(data.wins.length);
        histList.innerHTML = `<p>No wins</p>`;
    }
}
