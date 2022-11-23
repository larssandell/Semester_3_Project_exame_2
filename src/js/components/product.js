const indexMain = document.querySelector('#index__main');
const qs = document.location.search;
const params = new URLSearchParams(qs);
// console.log(params);
const id = params.get('id');
const product = 'https://api.noroff.dev/api/v1/auction/listings/' + id;
const loader = document.getElementById('loader');

export const getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

async function getProduct() {
    try {
        const response = await fetch(product, getOptions);
        const data = await response.json();
        console.log(data);
        indexMain.innerHTML = `
                            <div class="col-sm-6 col-md-4 col-lg-3 mb-1">
                            <div id="custom__card" class="card">
                                
                                    <img
                                        class="card-img-top"
                                        src="${data.media}"
                                        alt=""
                                        onerror="this.src = './img/no-image.png';" alt="No image provided"
                                   
                                </a>
                                <div class="card-body text-center">
                                    <p class="card-title">${data.title}</p>
                                    
                                </div>
                                <div class="card-footer">
                                    <p>Created: ${data.created}</p>
                                </div>
                            </div>
                        </div>`;
        loader.innerHTML = '';
    } catch (err) {
        console.log(err);
    }
}
getProduct();

export function indexCards(ele) {
    indexMain.innerHTML += `
                            <div class="col-sm-6 col-md-4 col-lg-3 mb-1">
                            <div id="custom__card" class="card">
                                <a href="/product.html?id=${ele.id}">
                                    <img
                                        class="card-img-top"
                                        src="${ele.media}"
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
// function switchImage(image) {
//     const container = document.getElementById('main-image');
//     container.src = image.src;
// }

// document.addEventListener('DOMContentLoaded', function (event) {
//     event.switchImage();
// });
