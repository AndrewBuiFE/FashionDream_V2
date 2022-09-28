import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAxiosHeader } from '../../controllers/axios/axiosSendRequest';
import { thunkGetProductList } from '../../stores/slices/ProductSlice';

const AppAuthen = () => {
  const tag = 'AppAuthen';
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state => state.system);
  console.log('Access token: ', accessToken);
  const {
    pagination: {filter: productFilter},
  } = useSelector(
    /**
     * @param {import('../../stores/reducers/type/index.d').FashionDreamState} state
     */
    state => state.product,
  );
  useEffect(() => {
    if (!_.isEmpty(accessToken)) {
      // dispatch()
      console.log('Authenticating...');
    }
  }, [accessToken]);
  useEffect(() => {
    if (accessToken) {
      setAxiosHeader('Authorization', `Bearer ${accessToken}`);
    }
    dispatch(thunkGetProductList({...productFilter, page: 1}));
  }, [accessToken, dispatch, productFilter]);
  return <></>;
};
export default AppAuthen;
