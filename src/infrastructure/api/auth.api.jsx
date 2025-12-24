import { apiFetch } from "@api/client"

export function loginRequest(email, password) {
    return apiFetch("users/login/", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    })
}

export function checkAuthRequest() {
    return apiFetch("users/chech-auth/", {
        method: "GET",
    })
}

export function refreshTokenRequest(refresh_token) {
    return fetch(
        import.meta.env.VITE_API_ENDPOINT + "users/refresh/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh_token }),
        }
    )
}
