import axios from 'axios';
import _ from 'lodash';
import Utils from '../../shared/helpers/Utils';
const qs = require('qs');
const tag = 'axiosSendRequest';

/**
 * @author hoang
 * @param {'get' | 'put' | 'post' | 'delete' | 'patch'} method
 * @param {string} url
 * @param {object} params
 * @param {string} object
 * @return {Promise<{result: string, code: number, message: string}>}
 */
async function axiosSendRequest(method, url, params = null, header = null) {
  console.log(
    '\n[Axios ' + method + ']: \n\t url = ',
    url,
    '\n\t params = ',
    JSON.stringify(params),
    '\n\t header = ',
    header,
  );

  let responseData = {
    result: 'error',
    message: 'Không xác định',
    code: 0,
  };
  // required
  const config = {
    method: method,
    url: url,
  };
  // optional
  if (header) {
    config.headers = header;
  }
  // optional
  if (params) {
    if (method === 'get') {
      config.url =
        url +
        '?' +
        qs.stringify(params, {
          arrayFormat: 'indices',
          encode: false,
        });
    } else {
      config.data = params;
    }
  }
  console.log('Config: ', config);
  await axios(config)
    .catch(function (error) {
      console.log('Error: ', error);
      if (error.response) {
        responseData.message = _.isString(error.response.data)
          ? error.response.data
          : 'Không xác định';
        responseData.code = error.response.status;
      }
      console.warn('[Axios]', error);
      return {data: responseData};
    })
    .then(response => response.data)
    .then(handleRequestError)
    .then(data => {
      responseData = data;
    });
  console.log('\n[Axios Response Data]: \n\t', url, '\n\t', responseData, '\n');
  return responseData;
}

const handleRequestError = data => {
  const {message, status} = data;
  if (message && status === 'error') {
    Utils.toast(message);
  }
  return data;
};

/**
 * set a field for all axios request header
 * @param {*} key
 * @param {*} value
 */
const setAxiosHeader = (key, value) => {
  axios.defaults.headers.common[key] = value;
  console.log('[Axios]', 'Set default header', {key, value});
};

setAxiosHeader('Accept-Encoding', 'gzip');
setAxiosHeader('Content-Type', 'application/json');

export default axiosSendRequest;
