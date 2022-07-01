import axios from "axios";
import { request } from "http";
import { getAccessTokenFromLocalStorage } from "../utils/utils";

const instance = axios.create({
  baseURL: "http://localhost:9090",
  headers: { "Access-Control-Allow-Origin": "*" },
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    if (config.url?.indexOf("/protected")) {
      if (config.headers) {
        config!.headers["Authorization"] =
          `Bearer ${getAccessTokenFromLocalStorage()}` as string;
      }
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const doGet = (uri: string, params = {}) => instance.get(uri, params);
export const doPost = (uri: string, params = {}) => instance.post(uri, params);
export const doPut = (uri: string, params = {}) => instance.put(uri, params);
export const doDelete = (uri: string, params = {}) =>
  instance.delete(uri, params);
