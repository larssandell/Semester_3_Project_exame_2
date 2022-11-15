export async function registerUser(url, options = {}) {
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export async function loginUser(url, options = {}) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const accessToken = data.accessToken;
        const userName = data.name;
        localStorage.setItem('userName', userName);
        localStorage.setItem('accessToken', accessToken);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function ApicallWithToken(url, options = {}) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
