import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import ProductOrderedComponent from '../../components/ProductOrderedComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
const OrderDetailScreen = props => {
  /**
   * @type {{order: import('../../models/types/index.d').Order}}
   */
  let {order} = props?.route?.params;

  // rendering functions
  const OrderInformationField = useCallback(
    /**
     * @param {{field: string, content: string}} param0
     */
    ({field, content}) => {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              AppText.primaryText,
              {color: AppColors.smallTitleText, width: 132},
            ]}>
            {field}
          </Text>
          <Text style={[AppText.primaryText, {flex: 1}]}>{content}</Text>
        </View>
      );
    },
    [],
  );
  const renderHeader = useCallback(() => {
    return (
      <View>
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
        <View style={{marginTop: 16, marginBottom: 18}}>
          <Text style={AppText.primaryText}>3 items</Text>
        </View>
      </View>
    );
  }, [order]);
  const renderFooter = useCallback(() => {
    return (
      <View style={{marginTop: 34}}>
        <Text
          style={[AppText.primaryText, {marginBottom: 15, fontWeight: '650'}]}>
          Order information
        </Text>
        <OrderInformationField
          field="Shipping address: "
          content="3 Newbridge Court ,Chino Hills, CA 91709, United States"
        />
        <DividerComponent height={24} />
        <OrderInformationField
          field="Payment method: "
          content="**** **** **** 3947"
        />
        <DividerComponent height={24} />
        <OrderInformationField
          field="Delivery method: "
          content="FedEx, 3 days, 15$"
        />
        <DividerComponent height={24} />
        <OrderInformationField
          field="Discount: "
          content="10% Personal promo"
        />
        <DividerComponent height={24} />
        <OrderInformationField field="Total amount: " content="133$" />
        <View
          style={{
            marginTop: 34,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <RadiusButton
            type="disabledButton"
            title="Reorder"
            buttonCustomStyle={{width: 160}}
          />
          <RadiusButton
            type="redButton"
            title="Leave feedback"
            buttonCustomStyle={{width: 160}}
          />
        </View>
        <DividerComponent height={24} />
      </View>
    );
  }, []);
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
      <View style={{marginHorizontal: 16, marginTop: 9, flex: 1}}>
        <FlatList
          data={order.listItem}
          renderItem={renderOrderedProduct}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default OrderDetailScreen;
