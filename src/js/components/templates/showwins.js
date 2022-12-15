import { historyHtml } from './historytemp.js';
import { histWins } from '../document.js';

export function showHistoryWins(data) {
    for (let i = 0; i <= data.wins.length; i++) {
        const listArray = data.wins;
        if (data.wins.length !== 0) {
            // console.log(data.wins.length);
            listArray.forEach(function (ele) {
                historyHtml(histWins, ele, 0);
            });
        } else {
            // console.log(data.wins.length);
            histWins.innerHTML = `<p>No wins</p>`;
        }
    }
}
