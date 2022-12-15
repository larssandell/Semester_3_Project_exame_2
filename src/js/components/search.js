import { searchInput } from './document.js';
import { listingsUrlAll } from './urls.js';
import { headersInfo } from './Api/options.js';
import { indexMain } from './document.js';
import { timeDateConvI } from './datetime.js';
import { apiCall } from './Api/apiCall.js';

export async function searchFuncOne() {
    async function getlistingsAll() {
        try {
            const getResponse = await apiCall(
                listingsUrlAll,
                'GET',
                headersInfo
            );
            searchArray = await getResponse.json();
            // console.log(searchArray);
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
        for (let i = 0; i < searchArray.length; i++) {
            // console.log('searchArray[i]', searchArray[i]);
            // indexCards(searchArray, i, 'ends at: ');
            const createHtml = result
                .map((ele) => {
                    timeDateConvI(ele);
                    const converted = timeDateConvI(ele);
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
                                        <p>Ends at: ${converted}</p>
                                    </div>
                                </div>
                            </div>`;
                })
                .join('');

            indexMain.innerHTML = createHtml;
        }
    }
}
