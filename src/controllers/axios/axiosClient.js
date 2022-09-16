// api/axiosClient.js
import axios from 'axios';
import { mockUrl } from '../apis/Api';

// Cai dat config mac dinh cho http request
// Tham khao: `https://github.com/axios/axios#request-config`
// de xem chi tiet

/**
 * @author hoang
 * @param method
 * @param url
 * @param params
 * @param header
 * @return {Promise<{result: string, code: number, message: string}>}
 */
const axiosClient = axios.create({
  baseURL: mockUrl,
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'gzip',
  },
});

axiosClient.interceptors.request.use(async config => {
  console.log(
    config.url,
    config.method,
    config.method === 'post' ? config.data : config.params,
  );
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  error => {
    // Bat loi xay ra
    console.log(`[axiosClient.js] ${error}`);
    throw error;
  },
);

export default axiosClient;
