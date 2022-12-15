import { token } from '../document.js';

export const headersInfoAuth = {
    'content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
};

export const headersAuth = {
    'content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
};

export const headersInfo = {
    'content-Type': 'application/json',
    Accept: 'application/json',
};
