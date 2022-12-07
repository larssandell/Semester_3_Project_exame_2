export const histList = document.getElementById('history__list');

export function showHistoryListings(ele) {
    for (let i = 0; i < ele.listings.length; i++) {
        console.log(ele.listings[i]);
        if (ele.listings.length !== 0) {
            histList.innerHTML += `<ul
                                        class="list-group list-group-light pb-2"
                                        style="width: auto"
                                    >
                                        <a href="/product.html?id=${ele.listings[i].id}"
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                <div class="d-flex align-items-center">
                                                    <img
                                                        src="${ele.listings[i].media[0]}"
                                                        onerror="this.src = './img/no-image.png';" alt="No image provided"
                                                        alt="${ele.listings[i].title}"
                                                        style="width: 45px; height: 45px"
                                                        class="rounded-circle"
                                                        id="hist__img"
                                                    />
                                                    <div class="ms-3">
                                                        <p
                                                            id="hist__title"
                                                            class="mb-1"
                                                        >
                                                            Title: ${ele.listings[i].title}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            </a>
                                    </ul>`;
        } else {
            console.log('no listings');
        }
    }
}
