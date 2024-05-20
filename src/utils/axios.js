import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/sabbirhossainc/server/",
  // baseURL: "http://localhost:9000",
});

export default axiosInstance;
