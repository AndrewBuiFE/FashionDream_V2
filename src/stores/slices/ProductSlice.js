import {createSlice} from '@reduxjs/toolkit';

const tag = 'ProductSlice';
export const initialState = {
  name: '',
  quantity: 0,
};

const ProductSlice = createSlice({
  initialState: initialState,
  name: tag,
  reducers: {
    setProductName(state, action) {
      return {
        ...state,
        quantity: action.payload,
      };
    },
  },
});

export default ProductSlice.reducer;
export const {setProductName} = ProductSlice.actions;
