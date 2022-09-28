import axiosSendRequest from '../axios/axiosSendRequest';

export const mockUrl = 'http://192.168.0.103:3000';

export default {
  // auth action
  /**
   * @param {{email: string, password:string}} params
   */
  logIn(params) {
    return axiosSendRequest('post', `${mockUrl}/auth/login`, params);
  },
  // product action
  getAllProduct(params) {
    return axiosSendRequest('get', `${mockUrl}/product/get/all`, params);
  },
};
