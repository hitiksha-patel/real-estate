import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
  withCredentials: true,
});

export default apiRequest;
