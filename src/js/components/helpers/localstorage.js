export function localStorage(data) {
    const accessToken = data.accessToken;
    const userName = data.name;
    const userCredits = data.credit;
    localStorage.setItem('userName', userName);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('credit', userCredits);
}
