// utils/API.js
import config from "config";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});


axiosClient.interceptors.response.use(
  function(response) {
    return response.data;
  },
  async function(error) {
    // Reject promise if error
    if (error.response?.status === 401||error?.message === "Network Error") {
      alert("Network Error");
      return;
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
