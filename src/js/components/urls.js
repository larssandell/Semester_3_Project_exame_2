import { id } from './qs.js';
import { userName } from './document.js';

export const baseUrl = 'https://api.noroff.dev/api/v1/';
export const sellerBids = '?_seller=true&_bids=true';
export const bidUrl = 'auction/listings/' + id;
export const regUrl = `${baseUrl}auction/auth/register`;
export const loginUrl = `${baseUrl}auction/auth/login`;
export const createListingUrl = `${baseUrl}auction/listings`;
/**
 * Re usable url with changeable number ex: limit= 10
 * @param {number} limit
 * @returns
 */
export function getListingsUrl(limit) {
    const listingsUrl = `${baseUrl}auction/listings?sortOrder=desc&limit=${limit}&_active=true&_seller=true&_bids=true`;
    return listingsUrl;
}

export function listingsOffsetUrl(limit, offset) {
    const listingsUrlAll = `${baseUrl}auction/listings?limit=${limit}&offset=${offset}&_active=true`;
    return listingsUrlAll;
}
export const listingUrlFilterActive = `${baseUrl}auction/listings?_active=true`;
export const listingUrlFilterBids = `${baseUrl}auction/listings?_active=true&_bids=true`;
export const listingUrlNoFilter = `${baseUrl}auction/listings?_active=true`;
export const listingsUrlAll = `${baseUrl}auction/listings?sortOrder=desc&_active=true&_seller=true`;
export function getProfileUrl(user) {
    const profileUrl = `${baseUrl}auction/profiles/${user}?_listings=true`;
    return profileUrl;
}
export const profilUrl = `${baseUrl}auction/profiles/${userName}`;
export const accUrlId = `${baseUrl}auction/profiles/${userName}?_listings=true`;
export const allProfilesUrl = `${baseUrl}auction/profiles`;
const productOnly = 'auction/listings/' + id;
export const productUrl = 'auction/listings/' + id + '?_seller=true&_bids=true';
export const productSpecific = `${baseUrl}${productUrl}`;
export const deleteList = `${baseUrl}${productOnly}`;
export const placeBidUrl = `${baseUrl}${bidUrl}/bids`;
export const profileAvatar = `${baseUrl}auction/profiles/${userName}/media`;
export const productSpecificAll = `${baseUrl}${productUrl}${sellerBids}`;
