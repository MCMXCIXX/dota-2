const TARGET_URL = 'https://www.dota2.com';

export const request = (endpoint: string) => {
    const fullUrl = `${TARGET_URL}${endpoint}`;
    const proxiedUrl = `https://corsproxy.io/?${encodeURIComponent(fullUrl)}`;
    return fetch(proxiedUrl, {})
        .then(res => res.json())
}
