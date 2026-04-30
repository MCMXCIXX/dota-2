const TARGET_URL = 'https://www.dota2.com';

export const request = (endpoint: string) => {
    const fullUrl = endpoint.startsWith('http')
        ? endpoint
        : `${TARGET_URL}/${endpoint.replace(/^\//, '')}`;
    const proxiedUrl = `https://corsproxy.io/?${encodeURIComponent(fullUrl)}`;
    return fetch(proxiedUrl, {})
        .then(res => res.json())
}
