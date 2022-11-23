export const baseUrl = 'https://api.noroff.dev/api/v1/';
export const regUrl = 'auction/auth/register';
export const loginUrl = 'auction/auth/login';
export const listingsUrl = 'auction/listings';
export const listingsUrlPromo =
    'auction/listings?limit=4&_seller=true&_bids=true';
export const listingsUrlAll = 'auction/listings?_seller=true&_bids=true';
export const profilUrl = 'auction/profiles/${name}';
export const allProfilesUrl = 'auction/profiles';

// GET /api/v1/auction/listings?sort=created&sortOrder=desc
// GET /api/v1/auction/listings?sort=title&sortOrder=asc
