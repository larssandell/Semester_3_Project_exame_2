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
hamburgerAnimation();
pageHelpers();
updateAvatar();
// console.log(userName);
// console.log(accUrlId);
// console.log(token);

// Legg til denne for hvis status = true
// if (!response.status === true)
async function getAccountInfo() {
    const isUser = userName;
    // console.log(isUser);

    if (isUser === isUser) {
        try {
            const response = await fetch(accUrlId, getOptionAuth);
            const data = await response.json();
            const avatar = document.querySelector('.acc__avatar');
            // const listing = data.listings;
            // console.log('reponse code', response.status);
            // // console.log(listing);
            console.log(response.ok);
            // console.log(data);
            // console.log(data.avatar);

            document.title = `Auction Wars | ${data.name}`;

            // console.log(avatar.src);
            // console.log(data.avatar);
            // const avatarNull = avatar.src;
            // console.log(avatarNull);
            if (avatar !== null) {
                avatar.src = `${data.avatar}`;
            } else {
                avatar.src = '../../img/noun-person-5178759.png';
            }
            // accAvatar.innerHTML = `<img class="rounded-circle mt-1 me-3 bg-light acc__avatar" onerror="this.src = './img/noun-person-5178759.png';" src="${data.avatar}">`;
            accName.textContent = `${data.name}`;
            accMail.textContent = `${data.email}`;
            accCredit.textContent = `${data.credits}`;

            const noListings = data.listings.length;
            if (!noListings === 0) {
                badgeLi.textContent = `${data.listings}`;
            } else {
                badgeLi.textContent = `0`;
            }
            const noWins = data.wins.length;
            if (!noWins === 0) {
                badgeWin.textContent = `${data.wins}`;
            } else {
                badgeWin.textContent = `0`;
            }
            loader.innerHTML = '';
        } catch (err) {
            console.log(err);
        }
    }
}

getAccountInfo();
