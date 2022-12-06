import { pageHelpers } from './components/helpers/helpers.mjs';
import { accUrlId } from './components/urls.mjs';
import {
    userName,
    accName,
    accMail,
    accCredit,
    badgeLi,
    badgeWin,
    loader,
} from './components/document.mjs';
import { getOptionAuth } from './components/Api/options.mjs';
import { hamburgerAnimation } from './components/hamburger.mjs';
import { updateAvatar } from './components/Api/changeavatar.mjs';
import { showHistoryListings } from './components/templates/showhistory.mjs';
import { showHistoryWins } from './components/templates/showwins.mjs';
import { createEntryListing } from './components/Api/createlisting.mjs';

hamburgerAnimation();
pageHelpers();
updateAvatar();
createEntryListing();
// console.log(userName);
// console.log(accUrlId);
// console.log(token);

async function getAccountInfo() {
    const isUser = userName;
    console.log(isUser);

    if (isUser === isUser) {
        try {
            const response = await fetch(accUrlId, getOptionAuth);
            const data = await response.json();
            const avatar = document.querySelector('.acc__avatar');

            // Legg til denne for hvis status = true
            // if (!response.status === true)

            // const listing = data.listings;
            // console.log('reponse code', response.status);
            // // console.log(listing);
            // console.log(response.ok);
            console.log(data);
            // console.log(data.avatar);
            document.title = `Auction Wars | ${data.name}`;
            const imgSrc = data.avatar;

            if (imgSrc.length !== 0) {
                avatar.src = `${data.avatar}`;
            } else {
                avatar.src = '../../img/noun-person-5178759.png';
            }
            accName.textContent = `${data.name}`;
            accMail.textContent = `${data.email}`;
            accCredit.textContent = `${data.credits}`;

            const noListings = data.listings.length;
            // console.log(noListings);
            if (noListings !== 0) {
                badgeLi.textContent = `${data.listings.length}`;
            } else {
                badgeLi.textContent = `0`;
            }
            const noWins = data.wins.length;
            if (!noWins === 0) {
                badgeWin.textContent = `${data.wins}`;
            } else {
                badgeWin.textContent = `0`;
            }
            setTimeout(() => {
                showHistoryListings(data);
                showHistoryWins(data);
            }, 20);

            loader.innerHTML = '';
        } catch (err) {
            console.log(err);
        }
    }
}

getAccountInfo();
