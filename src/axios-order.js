import axios from "axios";

const instance = axios.create({
  baseURL: "https://myburgerbuilder-6590c.firebaseio.com/"
});

export default instance;
