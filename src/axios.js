import axios from "axios";

// this gives us the base url to append get request to

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;