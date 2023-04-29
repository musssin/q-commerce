import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://localhost:3123'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Content-Type'] = 'application/json'
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    console.log('Error', error);
    
    return Promise.reject(error);
  });
export { VueAxios, axios };