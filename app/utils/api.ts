import axios from "axios"

const BASE_URL = 'https://api.eurasia.crocos.kz/'

export const api = axios.create({
    baseURL:`${BASE_URL}api/v1`,
    headers: {
        'Access-Control-Allow-Origin' : '*',
    },
})