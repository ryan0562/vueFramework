import axios from 'axios';
import Mock from 'mockjs';

let mockObj;
//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
//添加一个返回拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
mockObj = Mock.mock('/api/loan/person/mobile/detect', {
  'name': '@name',
  'age|1-100': 100,
  'color': '@color'
});
export default mockObj;


