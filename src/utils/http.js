import service from "./service";

export default {
  /*
   * axios promise包装方法
   * @param methods {string}
   * @param url {string}
   * @param param {object}
   * @return Promise
   * */
  http(methods, url, param) {
    return new Promise((resolve, reject) => {
      if (methods === "get") {
        service
          .get(url)
          .then(res => {
            if (res.status === 200) {
              resolve(res);
            } else {
              reject(res);
            }
          })
          .catch(err => {
            reject(err);
          });
      } else {
        service
          .post(url, param)
          .then(res => {
            if (res.status === 200) {
              resolve(res);
            } else {
              reject(res);
            }
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  }
};
