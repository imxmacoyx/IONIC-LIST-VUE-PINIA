import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://e897-187-136-75-125.ngrok-free.app/",
  headers: {
    'ngrok-skip-browser-warning': 'true' 
  }
});

export default axiosClient;
