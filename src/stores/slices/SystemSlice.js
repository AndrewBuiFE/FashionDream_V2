import {createSlice} from '@reduxjs/toolkit';

const tag = 'SystemSlice';
export const initialState = {
  appState: 'idle',
  appFirstLoad: false,
  language: 'vi',
  loadingLanguage: false,
};
const SystemSlice = createSlice({
  name: tag,
  initialState: initialState,
  reducers: {
    setAppState(state, action) {
      return {
        ...state,
        appState: action.payload,
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
  },
});
export default SystemSlice.reducer;
export const {setAppState} = SystemSlice.actions;
