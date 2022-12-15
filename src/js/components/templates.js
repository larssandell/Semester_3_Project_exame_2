import { indexMain } from './document.js';
import { timeDateConv } from './datetime.js';

export function indexCards(data, i, whattext) {
    timeDateConv(data, i);
    // console.log(timeDateConv(data, i));
    const converted = timeDateConv(data, i);
    // console.log(converted);
    indexMain.innerHTML += `
                            <div class="col-sm-6 col-md-4 col-lg-3 mb-1">
                            <div id="custom__card" class="card">
                                <a href="/product.html?id=${data[i].id}">
                                    <img
                                        class="card-img-top"
                                        id="card__img"
                                        src="${data[i].media[0]}"
                                        alt="${data[i].title}"
                                        onerror="this.src = './img/no-image.png';" alt="No image provided"
                                    />
                                </a>
                                <div class="card-body text-center">
                                    <p class="card-title">${data[i].title}</p>

                                </div>
                                <div class="card-footer">
                                    <p class="my-auto">${whattext}: ${converted}</p>
                                </div>
                            </div>
                        </div>`;
}
