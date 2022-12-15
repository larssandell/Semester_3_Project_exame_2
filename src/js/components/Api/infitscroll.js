// import { apiCall } from './apiCall.mjs';
// import { baseUrl } from '../urls.mjs';
// import { headersInfo } from './options.mjs';
// import { indexCards } from '../templates.mjs';
// import { moreLoader, indexMain } from '../document.mjs';

// let limit = 12;
// // let page = 1;
// let offset = 12;

// // finne ut av offset, for hver gang den skroller
// const infitScrollUrl = `${baseUrl}auction/listings?sort=created&sortOrder=desc&limit=${limit}&offset=${offset}&_active=true&_seller=true&_bids=true`;

// async function infitScroll() {
//     try {
//         const response = await apiCall(infitScrollUrl, 'GET', headersInfo);
//         console.log(response);
//         const more = await response.json();
//         console.log(more);
//         return more;
//     } catch (err) {
//         console.log(err);
//     }
// }

// async function GetMore() {
//     const more = await infitScroll();
//     for (let i = 0; i < more.lengt; i++) {
//         // const createHtml = ;
//         // indexCards(more, i, 'Ends at: ');
//         indexMain.appendChild(indexCards(more, i, 'Ends at: '));

//         //     newCards.innerHTML = `
//         //     <div class="col-sm-6 col-md-4 col-lg-3 mb-1">
//         //     <div id="custom__card" class="card">
//         //         <a href="/product.html?id=${more[i].id}">
//         //             <img
//         //                 class="card-img-top"
//         //                 id="card__img"
//         //                 src="${more[i].media[0]}"
//         //                 alt="${more[i].title}"
//         //                 onerror="this.src = './img/no-image.png';" alt="No image provided"
//         //             />
//         //         </a>
//         //         <div class="card-body text-center">
//         //             <p class="card-title">${more[i].title}</p>

//         //         </div>
//         //         <div class="card-footer">

//         //         </div>
//         //     </div>
//         // </div>`;
//         // console.log('get more i', more[i]);
//         // indexMain.appendChild(tempCards);
//         moreLoader.classList.remove('show');
//         // let offset = offset + 12;
//     }
// }

// export function showMoreLoader() {
//     console.log(moreLoader);
//     moreLoader.classList.add('show');

//     setTimeout(() => {
//         let offset = 24;
//         console.log(offset);
//         // page++;
//         // let offset = offset + 12;
//         // console.log(page);
//         GetMore();
//     }, 1000);
// }

// export function scrollEvent() {
//     window.addEventListener('scroll', () => {
//         const { scrollTop, scrollHeight, clientHeight } =
//             document.documentElement;
//         if (scrollTop + clientHeight >= scrollHeight - 6) {
//             showMoreLoader();
//         }
//     });
// }
