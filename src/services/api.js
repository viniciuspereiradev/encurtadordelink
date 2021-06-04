import axios from "axios"

//key ed1bb2767fd025f89159e55ad7933a08ab80575b
// base url: https://api-ssl.bitly.com/v4/

export const key = "ed1bb2767fd025f89159e55ad7933a08ab80575b"

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${key}`
    }
})

export default api

