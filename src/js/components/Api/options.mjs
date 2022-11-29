import { token } from '../document.mjs';

export const headersInfo = {
    'content-Type': 'application/json',
    Accept: 'application/json',
};
export const headersInfo2 = {
    'content-Type': 'application/json',
};

export const postOption = {
    method: 'POST',
    headers: headersInfo,
    Authorization: `Bearer ${token}`,
};
export const postOptionAuth = {
    method: 'POST',
    headers: headersInfo,
};
export const getOption = {
    method: 'GET',
    headers: headersInfo,
};
export const deleteOption = {
    method: 'DELETE',
    headers: headersInfo,
};
export const putOption = {
    method: 'PUT',
    headers: headersInfo,
};
