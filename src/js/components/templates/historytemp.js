export function historyHtml(container, ele, o) {
    container.innerHTML += `<ul
                                        class="list-group list-group-light pb-2"
                                        style="width: auto"
                                    >
                                        <a href="./product.html?id=${ele.id}"
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                <div class="d-flex align-items-center">
                                                    <img
                                                        src="${ele.media[o]}"
                                                        onerror="this.src = './img/no-image.png';" alt="No image provided"
                                                        alt="${ele.title}"
                                                        style="width: 45px; height: 45px"
                                                        class="rounded-circle"
                                                        id="hist__img"
                                                    />
                                                    <div class="ms-3">
                                                        <p
                                                            id="hist__title"
                                                            class="mb-1"
                                                        >
                                                            Title: ${ele.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            </a>
                                    </ul>`;
}
