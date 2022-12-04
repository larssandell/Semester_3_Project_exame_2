export function localStorage(data) {
    const accessToken = data.accessToken;
    const userName = data.name;
    localStorage.setItem('userName', userName);
    localStorage.setItem('accessToken', accessToken);
}
// add credits
