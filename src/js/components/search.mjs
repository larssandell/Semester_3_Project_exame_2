import { searchInput } from './document.mjs';
import { listingsUrlAll } from './urls.mjs';
import { getOption } from './Api/options.mjs';
import { indexMain } from './document.mjs';

export async function searchFuncOne() {
    async function getlistingsAll() {
        try {
            const response = await fetch(listingsUrlAll, getOption);
            searchArray = await response.json();
            console.log(searchArray);
        } catch (error) {
            console.log('error search api call');
        }
    }
    getlistingsAll();
    let searchArray = [];
    searchInput.addEventListener('keyup', (e) => {
        const inputData = e.target.value.toLowerCase();
        const filterSearchArray = searchArray.filter((data) => {
            return data.title.toLowerCase().includes(inputData);
        });
        showSearchResult(filterSearchArray);
    });
    function showSearchResult(result) {
        const createHtml = result
            .map((ele) => {
                return ` 
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
            })
            .join('');

        indexMain.innerHTML = createHtml;
    }
}

// getlistingsAll();
// searchInput.addEventListener('keyup', (e) => {
//     const inputData = e.target.value.toLowerCase();
//     const filterSearchArray = searchArray.filter((data) => {
//         return (
//             data.title.toLowerCase().includes(inputData) ||
//             data.seller.name.toLowerCase().includes(inputData)
//         );
//     });
//     showSearchResult(filterSearchArray);
// });

// function showSearchResult(data) {
//     const createHtml = data.map((ele) => {
//         indexCards(ele);
//     });
// }

// export function searchFunc() {
//     let searchArray = [];
//     searchInput.addEventListener('keyup', async (e) => {
//         const inputData = e.target.value.toLowerCase();
//         console.log(inputData);
//         const filteredSearch = searchArray.filter((data) => {
//             return (
//                 data.title.toLowerCase().includes(inputData) ||
//                 data.seller.name.toLowerCase().includes(inputData)
//             );
//         });
//         async function getlistingsAll() {
//             try {
//                 const response = await fetch(listingsUrlAll, getOption);
//                 const data = await response.json();
//                 console.log(data);
//                 data.map(() => {
//                     return indexCards;
//                 });
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         getlistingsAll(filteredSearch);
//     });
// }
