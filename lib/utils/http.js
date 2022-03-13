"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault(require("./service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  /*
   * axios promise包装方法
   * @param methods {string}
   * @param url {string}
   * @param param {object}
   * @return Promise
   * */
  http: function http(methods, url, param) {
    return new Promise(function (resolve, reject) {
      if (methods === "get") {
        _service.default.get(url).then(function (res) {
          if (res.status === 200) {
            resolve(res);
          } else {
            reject(res);
          }
        }).catch(function (err) {
          reject(err);
        });
      } else {
        _service.default.post(url, param).then(function (res) {
          if (res.status === 200) {
            resolve(res);
          } else {
            reject(res);
          }
        }).catch(function (err) {
          reject(err);
        });
      }
    });
  }
};
exports.default = _default;