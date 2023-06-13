import axios from "axios";

const  service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    withCredentials: true,
    timeout: 1000 * 3600,
})
service.interceptors.request.use(
  (config) => {
    if (config.headers["Content-Type"] != "multipart/form-data") {
      config.headers["Content-Type"] = "application/json; charset=utf-8";
    }
    config.headers["Authorization"] = store.getters.token;
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// response interceptor
service.interceptors.response.use(
  (response) => {
    const data = !response.data.data ? response.data : response.data.data;
    const headers = response.headers;
    if (headers.authorization != undefined) {
      store.commit("authUser/SET_TOKEN", headers.authorization);
      if (typeof data == "Object") {
        data.token = headers.authorization;
      }
    }
    if (!data) {
      return Promise.reject(new Error("Network Error"));
    }
    return { data: data, headers };
  },
  (error) => {
    console.log(error);
    // return { status: error.response.status, message: error.message };
    // router.push({ name: "error", params: {} });
  }
);

export default service;