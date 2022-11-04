import axios from "axios";

const config = axios.create({
    baseURL: "http://localhost:5098"
})

export default config;