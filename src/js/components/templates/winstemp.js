export function winsHtml(container, ele) {
    container.innerHTML = `<ul
                                        class="list-group list-group-light pb-2"
                                        style="width: auto"
                                    >
                                        <a href="./product.html?id=${ele}"
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                <div class="d-flex align-items-start">
                                                    <p>${ele}</p>
                                                    <div class="ms-3">
                                                    </div>
                                                </div>
                                            </li>
                                            </a>
                                    </ul>`;
}
