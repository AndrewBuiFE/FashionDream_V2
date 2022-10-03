import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';
import Api from '../../controllers/apis/Api';

const checkoutTag = 'CheckoutSlice';
export const initialState = {
  paymentCards: [],
  shippingAddress: [],
  deliveryMethod: {},
};
export const thunkGetPaymentCards = createAsyncThunk(
  checkoutTag,
  /**
   * @param {import('../types/slice').CheckoutState} params
   */
  async params => {
    return await Api.getAllPaymentCard();
  },
);
const CheckoutSlice = createSlice({
  initialState: initialState,
  name: checkoutTag,
  reducers: {
    setDeliveryMethod(state, action) {
      return {
        ...state,
        delivery: action.payload,
      };
    },
  },
  extraReducers: {
    [thunkGetPaymentCards.pending]: () => {
      console.log('Thunk pending...');
    },
    [thunkGetPaymentCards.rejected]: () => {
      console.log('Thunk rejected');
    },
    [thunkGetPaymentCards.fulfilled]: (state, action) => {
      console.log('Thunk fulfilled!');
      const {data, message, statusCode} = action.payload;
      if (statusCode == 200 && data) {
        let {count, listCard} = data;
        if (_.isArray(listCard)) {
          state.paymentCards = listCard;
        }
      }
    },
  },
});
export default CheckoutSlice.reducer;
export const {setDeliveryMethod} = CheckoutSlice.actions;
