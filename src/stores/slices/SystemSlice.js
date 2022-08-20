import {createSlice} from '@reduxjs/toolkit';

const tag = 'SystemSlice';
export const initialState = {
  appState: 'idle',
  appFirstLoad: false,
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
  },
});
export default SystemSlice.reducer;
export const {setAppState} = SystemSlice.actions;
