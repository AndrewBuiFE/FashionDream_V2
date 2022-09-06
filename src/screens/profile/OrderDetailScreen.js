import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import ProductOrderedComponent from '../../components/ProductOrderedComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
const OrderDetailScreen = props => {
  /**
   * @type {{order: import('../../models/types/index.d').Order}}
   */
  let {order} = props?.route?.params;

  // rendering functions
  /**
   * @param {string} field
   * @param {string} content
   */
  // const OrderInfomationField = (field, content) => {
  //   return (
  //     <View style={{flexDirection: 'row'}}>
  //       <Text style={{width: 132}}>{field}</Text>
  //       <Text style={{width: 215}}>{content}</Text>
  //     </View>
  //   );
  // };
  const renderSeparator = useCallback(() => {
    return <DividerComponent height={30} width={8} />;
  }, []);
  const renderOrderedProduct = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').Product>}
     */
    ({item: orderedProduct, index}) => {
      return <ProductOrderedComponent product={orderedProduct} />;
    },
    [],
  );
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title="Order Details"
      />
      <View style={{marginHorizontal: 16, marginTop: 9}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={AppText.mediumTitle}>{`Order №${order.number}`}</Text>
          <Text
            style={[AppText.primaryText, {color: AppColors.smallTitleText}]}>
            {order.date}
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={AppText.primaryText}>
            <Text
              style={[AppText.primaryText, {color: AppColors.smallTitleText}]}>
              Tracking number:
            </Text>
            {order.trackingNumber}
          </Text>
          <Text style={[AppText.primaryText, {color: AppColors.success}]}>
            {order.status}
          </Text>
        </View>
        <View style={{marginTop: 16}}>
          <Text style={AppText.primaryText}>3 items</Text>
        </View>
        <View style={{marginTop: 18}}>
          <FlatList
            data={order.listItem}
            renderItem={renderOrderedProduct}
            ItemSeparatorComponent={renderSeparator}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{marginTop: 34}} />
      </View>
    </View>
  );
};
export default OrderDetailScreen;
