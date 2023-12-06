// axiosInstance.js

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api", // 프록시 서버를 통해 백엔드 서버로 전달
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true  // 이렇게 설정하면 요청시에 자동으로 쿠키가 포함됩니다.
});

export default axiosInstance;
