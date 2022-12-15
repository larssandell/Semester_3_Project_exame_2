/**
 * Universal api call that can take many Params
 * @param {parameter} url - Api url
 * @param {parameter} meth - METHOD: GET,POST,PUT,DEL
 * @param {parameter} heads - HEADERS:
 * @param {parameter} bod - BODY:
 * @returns response
 */
export async function apiCall(url, meth, heads, bod) {
    try {
        const response = await fetch(url, {
            method: meth,
            headers: heads,
            body: JSON.stringify(bod),
        });
        return response;
    } catch (err) {
        console.log(err);
    }
}
