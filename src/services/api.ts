const BASE_URL: string = '/api/dota';

export const request = (endpoint: string) => {
    return fetch(`${BASE_URL}${endpoint}`, {})
    .then(res => res.json())
}
