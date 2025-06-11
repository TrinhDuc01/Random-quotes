import axios from "axios";

const Http = axios.create({
    baseURL: "https://dummyjson.com/quotes/random"
})

export default Http