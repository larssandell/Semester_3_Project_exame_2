import { id } from './qs.mjs';
import { userName } from './document.mjs';

export const baseUrl = 'https://api.noroff.dev/api/v1/';
export const sellerBids = '?_seller=true&_bids=true';
export const bidUrl = 'auction/listings/' + id;
export const regUrl = `${baseUrl}auction/auth/register`;
export const loginUrl = `${baseUrl}auction/auth/login`;
export const listingsUrl = `${baseUrl}auction/listings`;
// export const listingsUrlPromo = `${baseUrl}auction/listings?sort=order&_active=true&limit=4&_seller=true&_bids=true`;

export const listingsUrlPromo = `${baseUrl}auction/listings?_active=true&sort=created&sortOrder=desc&_active=true&limit=4&_seller=true&_bids=true`;
export const listingsUrTwelv = `${baseUrl}auction/listings?_active=true&sort=created&sortOrder=desc&_active=true&limit=12&_seller=true&_bids=true`;
export const listingsUrlAll = `${baseUrl}auction/listings?_active=true&sort=created&sortOrder=desc&_seller=true&_bids=true`;
export const profilUrl = `${baseUrl}auction/profiles/${userName}`;
export const allProfilesUrl = `${baseUrl}auction/profiles`;
export const productUrl = 'auction/listings/' + id;
export const productSpecific = `${baseUrl}${productUrl}`;
export const placeBidUrl = `${baseUrl}${bidUrl}/bids`;
export const accUrlId = `${baseUrl}auction/profiles/${userName}?_listings=true`;
export const profileAvatar = `${baseUrl}auction/profiles/${userName}/media`;

export const productSpecificAll = `${baseUrl}${productUrl}${sellerBids}`;
// GET /api/v1/auction/listings?sort=created&sortOrder=desc
// GET /api/v1/auction/listings?sort=title&sortOrder=asc
