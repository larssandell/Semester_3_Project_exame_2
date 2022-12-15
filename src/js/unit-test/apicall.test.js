import { apiCall } from '../components/Api/apiCall';

test('The apiCall function, and expect testApi.ok = true, and data recived = recivedData', async () => {
    const url = 'https://api.noroff.dev/api/v1/auction/auth/login';
    const meth = 'POST';
    const head = {
        'content-Type': 'application/json',
        Accept: 'application/json',
    };
    const loginForm = {
        email: 'ronjarover@stud.noroff.no',
        password: 'lars12345',
    };

    const testApi = await apiCall(url, meth, head, loginForm);
    const data = await testApi.json();
    const myToken = data.accessToken;
    const status = testApi.ok;

    const recivedTestApi = true;
    const recivedData = {
        accessToken: myToken,
        avatar: 'https://media.tenor.com/BknAE7UU36AAAAAd/lion-dota.gif',
        credits: 993,
        email: 'ronjarover@stud.noroff.no',
        name: 'ronja_rover',
    };
    expect(data).toEqual(recivedData);
    expect(status).toBe(recivedTestApi);
});
