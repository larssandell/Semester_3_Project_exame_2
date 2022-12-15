// Loader document
export const loader = document.getElementById('loader');

// card container document
export const indexMain = document.querySelector('#index__main');
// Forms
export const formLogin = document.getElementById('form__login');
export const formReg = document.getElementById('form__register');
export const formBid = document.getElementById('form__bid');
export const formSearch = document.getElementById('form__search');
export const loginInput = document.getElementById('login__email');

// Buttons:
// nav
export const btnLogin = document.getElementById('btn__login');
export const btnLogout = document.getElementById('btn__logout');
export const btnRegister = document.getElementById('btn__register');
export const navAccount = document.getElementById('nav__account');
export const createLi = document.getElementById('nav__createli');

// login modal
export const loginSub = document.getElementById('login__submit');
export const loginModal = document.getElementById('login__modal');
export const loginPassword = document.getElementById('login__password');
export const loginEmail = document.querySelector('#login__email');

// register modal
export const regSub = document.getElementById('register__submit');
export const regName = document.getElementById('register__name');
export const regNameErr = document.querySelector('.name__error');
export const regEmail = document.getElementById('register__email');
export const regEmailErr = document.querySelector('.reg_email__error');
export const regPassword = document.getElementById('register__password');
export const regPassErr = document.querySelector('.reg__password__error');
export const regAvatar = document.getElementById('register__avatar');
export const okMsg = document.querySelector('.msg__ok');
export const regError = document.querySelector('.register__error');

// Create entry Modal
export const createForm = document.getElementById('create__entry');
export const mediaOne = document.querySelector('#media__one');
export const mediaTwo = document.querySelector('#media__two');
export const mediaThree = document.querySelector('#media__three');
export const createErr = document.getElementById('create__error');
export const createTitle = document.querySelector('#create__title');
export const createTitleErr = document.querySelector('.create__error-title');
export const endsAtInput = document.getElementById('endsAt');
export const errTime = document.getElementById('create__error-time');

// modal validations
export const errmsg = document.querySelector('#form__error');
export const emailError = document.querySelector('.email__error');
export const passwordError = document.querySelector('.password__error');
export const passwordInput = document.getElementById('login__password');

// Local Storage
export const token = localStorage.getItem('accessToken');
export const userName = localStorage.getItem('userName');
export const userCredit = localStorage.getItem('credit');

// export function getSet(item) {
//     const credits = localStorage.${item}("credits");
//     return credits
// }

// Account page
export const accAvatar = document.getElementById('account__avatar');
export const accName = document.getElementById('acc__username');
export const accMail = document.getElementById('acc__usermail');
export const accCredit = document.getElementById('acc__usercredit');
export const badgeWin = document.querySelector('.badge__wins');
export const badgeLi = document.querySelector('.badge__listings');
export const badgeBids = document.querySelector('.badge__bids');
export const avatarForm = document.getElementById('form__avatar');
export const avatarErr = document.querySelector('.avatar__error');
export const avatarInput = document.querySelector('#avatar__media');
export const histWins = document.getElementById('history__wins');

// product page
export const productTitle = document.getElementById('product__title');
export const productDesc = document.getElementById('product__desc');
export const productBid = document.getElementById('Curr__bid');
export const productEnds = document.getElementById('product__ends');
export const bidInput = document.getElementById('bid__input');
export const bidError = document.querySelector('.bid__error');
export const biddersWrapper = document.getElementById('bidders__wrapper');
export const bidCounter = document.querySelector('.bid__counter');
export const btnDel = document.getElementById('del__btn');
export const showBidBtn = document.querySelector('#show__bidders');

//               Images
export const mainImage = document.getElementById('main__image');
export const thumbImgs = document.getElementById('thumb__image');
export const changeImage = document.getElementById('change__image');
export const thumbImg = document.getElementById('thumb__image');
export const sellerName = document.getElementById('time__left');
//               Form
export const bidForm = document.getElementById('form__bid');
export const cardWrapper = document.querySelector('.card__wrapper');

// auction page
export const searchInput = document.getElementById('search__input');
export const viewMoreBtn = document.getElementById('auction__view-more');
export const moreLoader = document.querySelector('.more__loader');

// account page

// error msg
export const msgWrapper = document.getElementById('msg__wrapper');
export const alertMsg = document.querySelector('#alert__msg');
export const errormsg = document.querySelector('.err__msg');
