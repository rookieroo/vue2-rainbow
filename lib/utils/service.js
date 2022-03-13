"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var service = _axios.default.create({
  timeout: 30000
});

service.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  console.log(error);
});
service.interceptors.response.use(function (res) {
  var headers = res.headers;

  if (res.status === 200) {
    return res;
  }
}, function (error) {
  if (error && error.response && error.response.status === 401) {}

  return Promise.reject(error);
});
var _default = service;
exports.default = _default;