import { histWins } from '../document.js';
import { winsHtml } from './winstemp.js';

export function showHistoryWins(data) {
    for (let i = 0; i <= data.wins.length; i++) {
        const listArray = data.wins;
        if (data.wins.length !== 0) {
            console.log(data.wins);
            const filtered = listArray.filter(function (ele) {
                return ele;
            });
            filtered.forEach(function (ele) {
                winsHtml(histWins, ele);
            });
        } else {
            // console.log(data.wins.length);
            histWins.innerHTML = `<p>No wins</p>`;
        }
    }
}
