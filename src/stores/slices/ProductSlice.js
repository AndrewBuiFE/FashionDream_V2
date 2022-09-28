import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';
import moment from 'moment';
import Api from '../../controllers/apis/Api';

const productTag = 'ProductSlice';
export const initialState = {
  /**
   * @type {import('../../models/types/index.d').Product}
   */
  products: [],
  pagination: {
    hasMore: false,
    total: 0,
    filters: {
      title: '',
      description: '',
      priceFrom: 0,
      priceTo: 0,
      discount: 0,
      quantityFrom: 0,
      quantityTo: 0,
      content: '',
      createdAtFrom: moment().format('YYYY-MM-DD 00:00:00'),
      createdAtTo: moment().format('YYYY-MM-DD 00:00:00'),
    },
    page: 1,
    limit: 10,
  },
  loadingState: false,
  loadMoreState: false,
  forceReload: false,
};

export const thunkGetProductList = createAsyncThunk(
  productTag,
  /**
   * @param {import('../reducers/type/index.d').ProductState} params
   */
  async params => {
    return await Api.getAllProduct();
  },
);
const ProductSlice = createSlice({
  initialState: initialState,
  name: productTag,
  reducers: {
    setProductName(state, action) {
      return {
        ...state,
        quantity: action.payload,
      };
    },
    /**
     * @param state
     *
     * @param {{payload:{invoiceType:InvoiceType,buyerMST?:string,buyerName?:string
     * ,exportDateFrom?:string,exportDateTo?:string,invoiceState?:string,
     * invoiceCQTState?:string,processInvoiceState?:string,exportPeriod: string}}} param1
     */
    setFilter(state, {payload}) {
      _.entries(payload).forEach(([key, value]) => {
        state.pagination.filters[key] = value;
      });
      state.pagination.page = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(thunkGetProductList.pending, (state, action) => {
        console.log('Thunk pending');
        state.loadingState = true;
      })
      .addCase(thunkGetProductList.rejected, (state, action) => {
        console.log('Thunk rejected');
        state.loadingState = false;
        state.forceReload = false;
        state.loadMoreState = false;
      })
      .addCase(thunkGetProductList.fulfilled, (state, action) => {
        console.log('Thunk fulfilled');
        const {data, message, statusCode} = action.payload;
        if (statusCode == 200 && data) {
          let {products} = data;
          if (_.isArray(products)) {
            state.products = products;
          }
        }
      });
  },
});

export default ProductSlice.reducer;
export const {setProductName} = ProductSlice.actions;
