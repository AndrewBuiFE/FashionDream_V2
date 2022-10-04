// import { AppConfig } from '../../general/constants/Global';
// import axiosClient from '../axios/axiosClient';

// const commonApi = {
//   // Get app configs
//   getConfig: params => {
//     const url = 'https://speechin.htcsoftware.net/api/config';
//     return axiosClient.get(url, {params});
//   },
//   // login api
//   login: params => {
//     const url = 'https://speechin.htcsoftware.net/api/login';
//     const formData = new FormData();
//     Object.keys(params).forEach(key => {
//       formData.append(key, params[key]);
//     });
//     return axiosClient.post(url, formData);
//   },
//   getUserInfo: params => {
//     const config = {
//       method: 'get',
//       url: 'https://speechin.htcsoftware.net/api/user/get',
//       headers: {Authorization: `Bearer ${AppConfig.token}`},
//     };
//     return axiosClient(config);
//   },
//   getRewards: params => {
//     const url = 'https://speechin.htcsoftware.net/api/rewards';
//     return axiosClient.get(url, {params});
//   },
//   updateUserInfo: params => {
//     const config = {
//       headers: {Authorization: `Bearer ${AppConfig.token}`},
//     };
//     const formData = new FormData();
//     Object.keys(params).forEach(key => {
//       formData.append(key, params[key]);
//     });
//     const url = 'https://speechin.htcsoftware.net/api/user/update';
//     axiosClient.post(url, formData, config);
//   },
//   uploadImage: params => {
//     const config = {
//       headers: {Authorization: `Bearer ${AppConfig.token}`},
//     };
//     const url = 'https://speechin.htcsoftware.net/api/document/image';
//     const formData = new FormData();
//     Object.keys(params).forEach(key => {
//       formData.append(key, params[key]);
//     });
//     axiosClient.put(url, formData, config);
//   },
//   getDoc: params => {
//     const config = {
//       headers: {Authorization: `Bearer ${AppConfig.token}`},
//     };
//     const url = 'https://speechin.htcsoftware.net/api/document/get';
//     return axiosClient.get(url, config);
//   },
//   uploadDoc: params => {
//     const config = {
//       headers: {Authorization: `Bearer ${AppConfig.token}`},
//     };
//     const formData = new FormData();
//     Object.keys(params).forEach(key => {
//       formData.append(key, params[key]);
//     });
//     const url = 'https://speechin.htcsoftware.net/api/document/upload';
//     return axiosClient.put(url, formData, config);
//   },
//   updateDoc: params => {
//     const config = {
//       headers: {Authorization: `Bearer ${AppConfig.token}`},
//     };
//     const formData = new FormData();
//     Object.keys(params).forEach(key => {
//       formData.append(key, params[key]);
//     });
//     const url = 'https://speechin.htcsoftware.net/api/document/update';
//     axiosClient.post(url, formData, config);
//   },
//   deleteDoc: docId => {
//     const config = {
//       headers: {Authorization: `Bearer ${AppConfig.token}`},
//     };
//     const url = `https://speechin.htcsoftware.net/api/document/delete/${docId}`;
//     axiosClient.delete(url, config);
//   },
//   getSource: params => {
//     const url = 'https://newsapi.org/v2/top-headlines/sources';
//     return axiosClient.get(url, {params});
//   },

//   getFeeds: params => {
//     const url = 'https://newsapi.org/v2/top-headlines';
//     return axiosClient.get(url, {params});
//   },

//   searchFeeds: params => {
//     const url = 'https://newsapi.org/v2/everything';
//     return axiosClient.get(url, {params});
//   },

//   // Get app notifications
//   getNotifications: params => {
//     const url = 'https://speechin.htcsoftware.net/api/notification';
//     return axiosClient.get(url, {params});
//   },

//   //Subscribe
//   subscribe: params => {
//     const url = 'https://speechin.htcsoftware.net/api/payment/subscribe';
//     const formData = new FormData();
//     Object.keys(params).forEach(key => {
//       formData.append(key, params[key]);
//     });
//     return axiosClient.post(url, formData);
//   },

//   // Subscribe by Apple
//   subscribeByApple: async params => {
//     const url = 'https://visearch.net/remotetv/subscribe_by_apple.php';
//     const data = new URLSearchParams();
//     Object.keys(params).forEach(key => {
//       data.append(key, params[key]);
//     });
//     return axiosClient.post(url, data, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });
//   },

//   // Subscribe by Google
//   subscribeByGoogle: async params => {
//     const url = 'https://visearch.net/remotetv/subscribe_by_googleplay.php';
//     const data = new URLSearchParams();
//     Object.keys(params).forEach(key => {
//       data.append(key, params[key]);
//     });
//     return axiosClient.post(url, data, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });
//   },

//   // Update payment info
//   updatePaymentInfo: async params => {
//     const url = 'https://visearch.net/remotetv/update_payment_info.php';
//     const data = new URLSearchParams();
//     Object.keys(params).forEach(key => {
//       data.append(key, params[key]);
//     });
//     return axiosClient.post(url, data, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });
//   },

//   // Logout
//   logout: params => {
//     const config = {
//       headers: {Authorization: `Bearer ${AppConfig.token}`},
//     };
//     const url = 'https://speechin.htcsoftware.net/api/user/logout';
//     return axiosClient.post(url, {params}, config);
//   },
// };

// export default commonApi;
