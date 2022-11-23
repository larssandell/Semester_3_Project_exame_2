// Query Strings
export const qs = document.location.search;
export const params = new URLSearchParams(qs);
export const id = params.get('id');

// Loader document
export const loader = document.getElementById('loader');
