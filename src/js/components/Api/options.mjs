import { token } from '../document.mjs';

export const headersInfo = {
    'content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
};
export const headersInfo2 = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
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
export const getOptionAuth = {
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
