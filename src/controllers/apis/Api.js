import axiosSendRequest from '../axios/axiosSendRequest';

export const mockUrl = 'http://192.168.0.103:5678';

export class CommonApi {
  constructor() {}

  // signUp() {}
  logIn = async params => {
    return await axiosSendRequest('post', `${mockUrl}/auth/login`, params);
  };
}
