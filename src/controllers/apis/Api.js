import axiosSendRequest from '../axios/axiosSendRequest';
import {endPoint} from './const/endpoint';

export default {
  // auth action
  /**
   * @param {{email: string, password:string}} params
   */
  logIn(params) {
    return axiosSendRequest('post', endPoint.logIn, params);
  },
  // product action
  getAllProduct(params) {
    return axiosSendRequest('get', endPoint.getAllProduct, params);
  },

  getAllPaymentCard(params) {
    return axiosSendRequest('get', endPoint.getAllPaymentCard, params);
  },
  /**
   * @param {import('../../models/types/index.d').PaymentMethod} params
   */
  createPaymentCard(params) {
    return axiosSendRequest('post', endPoint.createPaymentCard, params);
  },
};
