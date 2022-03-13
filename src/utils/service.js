import axios from "axios";

const service = axios.create({
  timeout: 30000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
  }
);

service.interceptors.response.use(
  res => {
    const headers = res.headers;
    if (res.status === 200) {
      return res;
    }
  },
  error => {
    if (error && error.response && error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default service;
