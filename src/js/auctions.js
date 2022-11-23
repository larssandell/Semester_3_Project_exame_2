import { baseUrl, listingsUrlAll } from './components/urls.mjs';
const loader = document.getElementById('loader');
const indexMain = document.querySelector('#index__main');
const getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};
async function getlistingsAll() {
    try {
        const response = await fetch(baseUrl + listingsUrlAll, getOptions);
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
