import axiosSendRequest from '../axios/axiosSendRequest';

export const mockUrl = 'http://localhost:5678';

export class CommonApi {
  constructor() {}

  // signUp() {}
  logIn = async params => {
    const fixedParams = {
      email: 'buiviethoang12062000@gmail.com',
      password: 'Rbfatman123',
    };
    return await axiosSendRequest('post', `${mockUrl}/auth/login`, {
      email: 'buiviethoang12062000@gmail.com',
      password: 'Rbfatman123',
    });
  };
}
