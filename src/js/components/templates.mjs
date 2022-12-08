import { indexMain } from './document.mjs';
import { timeDateConv } from './datetime.mjs';
// import { imgError } from './imgerror.mjs';
// Cards
export function indexCards(data, i) {
    timeDateConv(data, i);
    console.log(timeDateConv(data, i));
    const converted = timeDateConv(data, i);
    console.log(converted);
    // if (data[i].media === null || undefined) {
    //     imgError();
    // }
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
                                    <p>Ends at: ${converted}</p>
                                </div>
                            </div>
                        </div>`;
}
