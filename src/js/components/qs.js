// Query Strings
export const qs = document.location.search;
export const params = new URLSearchParams(qs);
export const id = params.get('id');
export const userName = params.get('name');
export const qsUserName = params.get('name');
