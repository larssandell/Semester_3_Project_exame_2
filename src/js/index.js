import { baseUrl, listingsUrlPromo } from './components/urls.mjs';
const hamburger = document.querySelectorAll('#hamburger__icon');
const indexMain = document.querySelector('#index__main');
// const sliderContent = document.querySelectorAll('#slider__content');
const loader = document.getElementById('loader');

hamburger.forEach((button) => {
    button.addEventListener('click', () => {
        const currentState = button.getAttribute('data-state');

        if (!currentState || currentState === 'closed') {
            button.setAttribute('data-state', 'opened');
            button.setAttribute('aria-expanded', 'true');
        } else {
            button.setAttribute('data-state', 'closed');
            button.setAttribute('aria-expanded', 'false');
        }
    });
});

export const getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

async function getlistingsAll() {
    try {
        const response = await fetch(baseUrl + listingsUrlPromo, getOptions);
        const data = await response.json();
        console.log(data);
        data.forEach(function (ele) {
            indexCards(ele);
        });
        loader.innerHTML = '';
    } catch (err) {
        console.log(err);
    }
}
getlistingsAll();
// console.log(baseUrl + listingsUrlAll);

export function indexCards(ele) {
    indexMain.innerHTML += `
                            <div class="col-sm-6 col-md-4 col-lg-3 mb-1">
                            <div id="custom__card" class="card">
                                <a href="/product.html?id=${ele.id}">
                                    <img
                                        class="card-img-top"
                                        src="${ele.media[0]}"
                                        alt=""
                                        onerror="this.src = './img/no-image.png';" alt="No image provided"
                                    />
                                </a>
                                <div class="card-body text-center">
                                    <p class="card-title">${ele.title}</p>
                                    
                                </div>
                                <div class="card-footer">
                                    <p>Created: ${ele.created}</p>
                                </div>
                            </div>
                        </div>`;
}

function testBadge() {
    const badgeWin = document.querySelector('.badge__wins');
    const badgeLi = document.querySelector('.badge__listings');
    const badgeBids = document.querySelector('.badge__bids');
    badgeWin.innerHTML = '25';
    badgeLi.innerHTML = '400';
    badgeBids.innerHTML = '2';
}
testBadge();
