import { pageHelpers } from './components/helpers/helpers.js';
import { accUrlId } from './components/urls.js';
import {
    userName,
    accName,
    accMail,
    accCredit,
    badgeLi,
    badgeWin,
    loader,
} from './components/document.js';
import { headersInfoAuth } from './components/Api/options.js';
import { apiCall } from './components/Api/apiCall.js';
import { hamburgerAnimation } from './components/hamburger.js';
import { updateAvatar } from './components/Api/changeavatar.js';
import { showHistoryListings } from './components/templates/showhistory.js';
import { showHistoryWins } from './components/templates/showwins.js';
import { createEntryListing } from './components/Api/createlisting.js';

hamburgerAnimation();
pageHelpers();
updateAvatar();
createEntryListing();

accUrlId;
async function getAccountInfo() {
    const isUser = userName;
    // console.log(isUser);

    if (isUser === isUser) {
        try {
            const getResponse = await apiCall(accUrlId, 'GET', headersInfoAuth);
            const getData = await getResponse.json();
            const avatar = document.querySelector('.acc__avatar');
            // console.log(getData.avatar);
            // console.log(getData);
            document.title = `Auction Wars | ${getData.name}`;

            // console.log(imgSrc.length);
            if (getData.avatar === '' || undefined) {
                avatar.src = '../../img/noun-person-5178759.png';
            } else {
                avatar.src = `${getData.avatar}`;
            }
            accName.textContent = `${getData.name}`;
            accMail.textContent = `${getData.email}`;
            accCredit.textContent = `${getData.credits}`;

            const noListings = getData.listings.length;
            // console.log('no listings', noListings);
            if (noListings !== 0) {
                badgeLi.textContent = `${getData.listings.length}`;
            } else {
                badgeLi.textContent = `0`;
            }
            const winsLen = getData.wins.length;
            // console.log(winsLen);
            // console.log('no wins', noWins);
            if (winsLen !== 0) {
                badgeWin.textContent = `${winsLen}`;
            } else {
                badgeWin.textContent = `0`;
            }
            showHistoryListings(getData);
            showHistoryWins(getData);
            loader.innerHTML = '';
        } catch (err) {
            console.log(err);
        }
    }
}

getAccountInfo();
