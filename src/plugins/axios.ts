import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.freeapi.app/api/v1",
});

axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("currentAuthTokens") || "{}");

  if (token) {
    config.headers = config.headers || {};
    const unProtectedURLS = ["/users/register", "/users/login"];

    if (config.url && !unProtectedURLS.includes(config.url)) {
      config.headers.Authorization = token ? `Bearer ${token.accessToken}` : "";
    }
  }

  return config;
});
export default axiosInstance;
