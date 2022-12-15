import { biddersWrapper } from '../document.js';

export function bidders(ele, i) {
    biddersWrapper.innerHTML += `
                            <ul
                                    class="list-group list-group-light pb-2"
                                    style="width: 200px"
                                >
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                            <div class="ms-3">
                                                <p
                                                    id="bider__name"
                                                    class="fw-bold mb-1"
                                                >
                                                    User: ${ele[i].bidderName}
                                                </p>
                                                <p class="mb-1"> 
                                                    <span id="bider__amount"
                                                        >Amount: ${ele[i].amount}</span
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                            </ul>`;
    // return biddersHtml;
}
