export function getInform(str = "") {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '44796244-d6f861acc8986ccf49175a119';

    const parameters = new URLSearchParams({
        key: API_KEY,
        q: str,
        image_typ: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 20,
    });
    return fetch(`${BASE_URL}?${parameters}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })

}