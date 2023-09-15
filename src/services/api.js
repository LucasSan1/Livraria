import axios from "axios";

// Indica a url base que devera ser incrementada depois
const api = axios.create({
    baseURL: 'https://openlibrary.org'
})

export default api;