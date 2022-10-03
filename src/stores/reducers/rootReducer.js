/* eslint-disable no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import CheckoutSlice, {
  initialState as initialCheckoutState,
} from '../slices/CheckoutSlice';
import ProductSlice, {
  initialState as initialProductState,
} from '../slices/ProductSlice';
import SystemSlice, {
  initialState as initialSystemState,
} from '../slices/SystemSlice';
/**
 * @type {Reducer<import('../types/slice').FashionDreamState>}
 */
const fashionDreamReducer = combineReducers({
  system: SystemSlice,
  product: ProductSlice,
  checkout: CheckoutSlice,
});

/**
 * @type {Reducer<import('../types/slice').FashionDreamState>}
 */
const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT_SUCCESS') {
    return fashionDreamReducer(
      {
        ...state,
        system: initialSystemState,
        product: initialProductState,
        checkout: initialCheckoutState,
      },
      action,
    );
  }
  return fashionDreamReducer(state, action);
};
// https://viblo.asia/p/luu-redux-state-vao-local-storage-voi-redux-persist-3P0lPezv5ox
/**
 * @type {PersistConfig}
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  // blacklist: [''],
  transforms: [immutableTransform()],
};
export const fashionDreamRootReducer = persistReducer(
  persistConfig,
  rootReducer,
);
