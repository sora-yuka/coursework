const BASE_URL = import.meta.env.VITE_API_ENDPOINT

export async function apiFetch(url, options = {}) {
    const accessToken = localStorage.getItem("access_token")

    const response = await fetch(BASE_URL + url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(accessToken && {
                Authorization: "Bearer " + accessToken
            }),
            ...options.headers,
        }
    })

    return response
}
