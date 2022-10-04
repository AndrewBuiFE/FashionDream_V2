import {createSlice} from '@reduxjs/toolkit';

const tag = 'SystemSlice';
export const initialState = {
  appState: 'background', // run in background
  appFirstRun: true, // first time run app
  language: 'vi',
  loadingLanguage: false,
  accessToken: '',
  refreshToken: '',
  codepushDeploymentKey: null,
  appLogin: false,
  userInfo: [],
};
const SystemSlice = createSlice({
  name: tag,
  initialState: initialState,
  reducers: {
    setAppFirstRun(state, action) {
      return {
        ...state,
        appFirstRun: action.payload,
      };
    },
    setAppState(state, action) {
      return {
        ...state,
        appState: action.payload,
      };
    },
    setAppAccessToken(state, action) {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
    changeLanguage(state, action) {
      return {
        ...state,
        language: action.payload,
      };
    },
    loadLanguageStart(state, action) {
      return {
        ...state,
        loadingLanguage: action.payload,
      };
    },
    loadLanguageSuccess(state, action) {
      return {
        ...state,
        language: action.payload,
      };
    },
    setCodepushDeploymentKey(state, action) {
      return {
        ...state,
        codepushDeploymentKey: action.payload,
      };
    },
    setAppLogin(state, action) {
      return {
        ...state,
        appLogin: action.payload,
      };
    },
    setUserInfo(state, action) {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
  },
});
export default SystemSlice.reducer;
export const {
  setAppState,
  setAppFirstRun,
  setAppAccessToken,
  setAppLogin,
  setUserInfo,
} = SystemSlice.actions;
