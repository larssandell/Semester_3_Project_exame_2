import { token } from '../document.mjs';
export const headersInfo = {
    'content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
};

export const postOption = {
    method: 'POST',
    headers: headersInfo,
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
// export function putOption(formDataSeri) {
//     const option = {
//         method: 'PUT',
//         headers: headersInfo,
//         body: JSON.stringify(formDataSeri),
//     };
// }
// export const putOption = {
//     method: 'PUT',
//     headers: headersInfo,
//     body: JSON.stringify(formDataSeri),
// };
// export const BidOption = {
//     method: 'POST',
//     headers: headersInfo,
//     body: JSON.stringify(value),
// };
