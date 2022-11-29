import { id } from './qs.mjs';
export const baseUrl = 'https://api.noroff.dev/api/v1/';
export const sellerBids = '?_seller=true&_bids=true';
export const bidUrl = 'auction/listings/' + id;
export const regUrl = `${baseUrl}auction/auth/register`;
export const loginUrl = `${baseUrl}auction/auth/login`;
export const listingsUrl = `${baseUrl}auction/listings`;
export const listingsUrlPromo = `${baseUrl}auction/listings?sort=created&limit=4&_seller=true&_bids=true`;
export const listingsUrTwelv = `${baseUrl}auction/listings?sort=created&limit=12&_seller=true&_bids=true`;
export const listingsUrlAll = `${baseUrl}auction/listings?_seller=true&_bids=true`;
export const profilUrl = `${baseUrl}auction/profiles/${name}`;
export const allProfilesUrl = `${baseUrl}auction/profiles`;
export const productUrl = 'auction/listings/' + id;
export const productSpecific = `${baseUrl}${productUrl}`;
export const placeBidUrl = `${baseUrl}${bidUrl}/bids`;

export const productSpecificAll = `${baseUrl}${productUrl}${sellerBids}`;
// GET /api/v1/auction/listings?sort=created&sortOrder=desc
// GET /api/v1/auction/listings?sort=title&sortOrder=asc
