import { indexMain } from './document.mjs';
import { formatTimeline } from './datetime.mjs';
// Cards
export async function indexCards(ele) {
    // utcDate('2022-12-06T12:38:19.759Z');
    // const convertUtc = ele.created;
    // const isoTime = ele.created;
    // const date = new Date(isoTime);
    const element = new Date();
    formatTimeline(element);
    console.log(element);
    // utcDate(element);
    // console.log(element);
    // const convertTime = ele.created;
    // console.log('ikke fra export', newUtcDate);
    // console.log(convertTime);
    // console.log(newDate);
    // console.log(convertTime);

    indexMain.innerHTML += `
                            <div class="col-sm-6 col-md-4 col-lg-3 mb-1">
                            <div id="custom__card" class="card">
                                <a href="/product.html?id=${ele.id}">
                                    <img
                                        class="card-img-top"
                                        src="${ele.media[0]}"
                                        alt="${ele.title}"
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
// profile templates
// function testBadge() {
//     const badgeWin = document.querySelector('.badge__wins');
//     const badgeLi = document.querySelector('.badge__listings');
//     const badgeBids = document.querySelector('.badge__bids');
//     badgeWin.innerHTML = '25';
//     badgeLi.innerHTML = '400';
//     badgeBids.innerHTML = '2';
// }
// testBadge();

// register OK msg
