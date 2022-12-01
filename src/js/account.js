import { pageHelpers } from './components/helpers.mjs';
import { accUrlId } from './components/urls.mjs';
import {
    userName,
    token,
    accAvatar,
    accName,
    accMail,
    accCredit,
    badgeLi,
    badgeWin,
} from './components/document.mjs';
import { getOptionAuth } from './components/Api/options.mjs';

// import { qs, params } from './components/qs.mjs';

pageHelpers;
console.log(userName);
console.log(accUrlId);
console.log(token);

async function getAccountInfo() {
    const isUser = userName;

    if (isUser === isUser) {
        try {
            const response = await fetch(accUrlId, getOptionAuth);
            const data = await response.json();
            const listing = data.listings;
            console.log('reponse code', response.status);
            console.log(listing);
            console.log(data);
            console.log(data.avatar);

            // Legg til denne for hvis status = 200
            // if (!response.status === 200)
            document.title = `Auction Wars | ${data.name}`;
            const avatar = document.querySelector('.acc__avatar');
            console.log(avatar.src);
            const avatarNull = avatar.src;
            if (!avatarNull === 'NULL') {
                avatar.src = `${data.avatar}`;
            } else {
                avatar.src = '../../img/noun-person-5178759.png';
            }
            // accAvatar.innerHTML = `<img class="rounded-circle mt-1 me-3 bg-light acc__avatar" onerror="this.src = './img/noun-person-5178759.png';" src="${data.avatar}">`;
            accName.textContent = `${data.name}`;
            accMail.textContent = `${data.email}`;
            accCredit.textContent = `${data.credits}`;
            // console.log(data.listings);

            // // const listNull = data.listings.length;
            // // console.log(listNull);

            // // badgeLi.textContent = `0`;
            const noListings = data.listings.length;
            console.log('no listings', noListings);
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

            console.log(accAvatar);
        } catch (err) {
            console.log(err);
        }
    }
}

getAccountInfo();
