import _ from 'lodash';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAxiosHeader} from '../../controllers/axios/axiosSendRequest';
import {thunkGetPaymentCards} from '../../stores/slices/CheckoutSlice';
import {thunkGetProductList} from '../../stores/slices/ProductSlice';

const AppAuthen = () => {
  const tag = 'AppAuthen';
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state => state.system);
  console.log('Access token: ', accessToken);
  const {
    pagination: {filter: productFilter},
  } = useSelector(
    /**
     * @param {import('../../stores/types/slice').FashionDreamState} state
     */
    state => state.product,
  );
  // const {
  //   pagination: {filter: checkoutFilter},
  // } = useSelector(
  //   /**
  //    * @param {import('../../stores/types/slice').PaymentCardState} state
  //    */
  //   state => state.cards,
  // );
  useEffect(() => {
    if (!_.isEmpty(accessToken)) {
      // dispatch()
      console.log('Authenticating...');
      // dispatch(setAppAccessToken(accessToken))
    }
  }, [accessToken]);
  useEffect(() => {
    if (accessToken) {
      setAxiosHeader('Authorization', `Bearer ${accessToken}`);
    }
    dispatch(thunkGetProductList({...productFilter, page: 1}));
    dispatch(thunkGetPaymentCards());
  }, [accessToken, dispatch, productFilter]);
  return <></>;
};
export default AppAuthen;
