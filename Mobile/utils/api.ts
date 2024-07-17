import axios from "axios";

const api = axios.create({
  // add your IP then port:3030
  baseURL: "http://192.168.74.1:3030/api",
  withCredentials: true,
});

export default api;
