import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-express.firebaseio.com/",
});

export default instance;