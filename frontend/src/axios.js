import Axios from "axios";

export const axios = Axios.create({
    baseURL: "http://localhost:9091",
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
