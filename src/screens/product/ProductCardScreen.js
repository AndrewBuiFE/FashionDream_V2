import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {FILTER_SIZE, PRODUCT} from '../../assets/data';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import PickerComponent from '../../components/PickerComponent';
import ProductItemComponent from '../../components/ProductItemComponent';
import RadiusButton from '../../components/RadiusButton';
import StarComponent from '../../components/StarComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText, DeviceConstant} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';
import SelectColorModal from '../modals/SelectColorModal';
import SelectSizeModal from '../modals/SelectSizeModal';

const SLIDER_HEIGHT = 413;
const SLIDER_WIDTH = 275;
/**
 * @author Hoang
 * @description ProductCardScreen
 */
const ProductCardScreen = props => {
  // common hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [isModalVisible, showDropDownModal] = useState({
    size: false,
    color: false,
  });
  const [dropdownTitle, setDropdownTitle] = useState({
    color: 'Color',
    size: 'Size',
  });
  const [currentActiveIndex, setCurrentActiveIndex] = useState({
    color: -1,
    size: -1,
  });
  const [productsFavorite, setProductsFavorite] = useState(
    PRODUCT.map(product => {
      return product.isFavorited;
    }),
  );
  // common used var
  /**
   * @type {import('../../models/types/index.d').Product}
   */
  const product = props?.route?.params?.product;

  // common functions
  const dismissModal = () => {
    showDropDownModal({color: false, size: false});
  };
  // rendering functions

  const DropDown = useCallback(
    /**
     * @param {{title: string, type: string}} param0
     * @return {JSX.Element}
     */
    ({title, type}) => {
      return (
        <TouchableOpacity
          style={{
            width: 138,
            height: 40,
            borderWidth: 0.4,
            borderColor: AppColors.smallTitleText,
            borderRadius: 8,
            paddingLeft: 12,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
          onPress={() => {
            showDropDownModal({
              size: type === 'size' ? true : false,
              color: type === 'color' ? true : false,
            });
          }}>
          <Text>
            {type === 'color' ? dropdownTitle.color : dropdownTitle.size}
          </Text>
          <View
            style={{
              width: 16,
              height: 16,
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: 8,
            }}>
            <Image source={AppIcons.drop_down} />
          </View>
        </TouchableOpacity>
      );
    },
    [dropdownTitle],
  );
  const renderProduct = useCallback(
    ({item, index}) => {
      return (
        <ProductItemComponent
          product={item}
          key={index}
          isBottomRightButtonActive={productsFavorite[index]}
          onButtomRightButtonPress={() => {
            let tempState = [...productsFavorite];
            tempState[index] = !tempState[index];
            setProductsFavorite(tempState);
          }}
          onProductPress={() => {
            navigation.navigate(ScreenName.productCardScreen, {product: item});
          }}
        />
      );
    },
    [navigation, productsFavorite],
  );
  const renderImage = useCallback(({item, index}) => {
    return (
      <Image
        source={item}
        style={{width: SLIDER_WIDTH, height: SLIDER_HEIGHT}}
      />
    );
  }, []);
  const renderFooter = useCallback(
    () => <DividerComponent height={260} width={16} />,
    [],
  );
  const renderSeparator = useCallback(
    () => <View style={{height: 260, width: 16}} />,
    [],
  );
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <SelectSizeModal
        dismissModal={dismissModal}
        isModalVisible={isModalVisible.size}
        currentActiveIndex={currentActiveIndex.size}
        onSelect={
          /**
           * @type {string}
           */
          index => {
            switch (index) {
              case 0: {
                setDropdownTitle({
                  ...dropdownTitle,
                  size: FILTER_SIZE[0],
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  size: 0,
                });
                break;
              }
              case 1: {
                setDropdownTitle({
                  ...dropdownTitle,
                  size: FILTER_SIZE[1],
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  size: 1,
                });
                break;
              }
              case 2: {
                setDropdownTitle({
                  ...dropdownTitle,
                  size: FILTER_SIZE[2],
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  size: 2,
                });
                break;
              }
              case 3: {
                setDropdownTitle({
                  ...dropdownTitle,
                  size: FILTER_SIZE[3],
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  size: 3,
                });
                break;
              }
              case 4: {
                setDropdownTitle({
                  ...dropdownTitle,
                  size: FILTER_SIZE[4],
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  size: 4,
                });
                break;
              }
            }
          }
        }
      />
      <SelectColorModal
        dismissModal={dismissModal}
        isModalVisible={isModalVisible.color}
        currentActiveIndex={currentActiveIndex.color}
        onSelect={
          /**
           * @type {string}
           */
          index => {
            switch (index) {
              case 0: {
                setDropdownTitle({
                  ...dropdownTitle,
                  color: 'black',
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  color: 0,
                });
                break;
              }
              case 1: {
                setDropdownTitle({
                  ...dropdownTitle,
                  color: 'white',
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  color: 1,
                });
                break;
              }
              case 2: {
                setDropdownTitle({
                  ...dropdownTitle,
                  color: 'orange',
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  color: 2,
                });
                break;
              }
              case 3: {
                setDropdownTitle({
                  ...dropdownTitle,
                  color: 'brown',
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  color: 3,
                });
                break;
              }
              case 4: {
                setDropdownTitle({
                  ...dropdownTitle,
                  color: 'green',
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  color: 4,
                });
                break;
              }
              case 5: {
                setDropdownTitle({
                  ...dropdownTitle,
                  color: 'blue',
                });
                setCurrentActiveIndex({
                  ...currentActiveIndex,
                  color: 5,
                });
                break;
              }
            }
          }
        }
      />
      <HeaderComponent
        type="medium"
        title={product.title}
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.share}
        onLeftIconPress={goBack}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Carousel
          data={product.image}
          renderItem={renderImage}
          sliderWidth={DeviceConstant.screenWidth}
          itemWidth={SLIDER_WIDTH}
          sliderHeight={SLIDER_HEIGHT}
          itemHeight={SLIDER_HEIGHT}
          enableSnap
          activeSlideAlignment="start"
          inactiveSlideScale={1}
          // slideStyle={{marginEnd: 4}}
        />
        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: 'row',
            marginTop: 12,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <DropDown title="Size" type="size" />
          </View>
          <View>
            <DropDown title="Color" type="color" />
          </View>
          <CircleButton
            type="darkButton"
            size="small"
            icon={AppIcons.heart_inactive}
            iconStyle={{width: 13, height: 12}}
            customStyle={{}}
          />
        </View>
        <View style={{paddingHorizontal: 16}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 22,
              height: 29,
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 24,
                  color: '#F7F7F7',
                  lineHeight: 29,
                  fontFamily: 'Metropolis',
                }}
                numberOfLines={1}>
                {product.brand}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  color: '#F7F7F7',
                  lineHeight: 29,
                  fontFamily: 'Metropolis',
                }}
                numberOfLines={1}>
                {`$${product.originalPrice}`}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 8}}>
            <Text style={AppText.tinyTitle} numberOfLines={1}>
              {product.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <StarComponent quantity={product.star} size="small" />
            <Text
              numberOfLines={1}
              style={[
                {
                  fontSize: 10,
                  lineHeight: 14,
                  color: AppColors.smallTitleText,
                  fontFamily: 'Metropolis',
                  marginLeft: 2,
                },
              ]}>{`(${product.comment})`}</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={AppText.primaryText}>{product.description}</Text>
          </View>
          <RadiusButton
            title="ADD TO CART"
            type="redButton"
            buttonCustomStyle={{marginTop: 20}}
          />
        </View>
        <View style={{marginTop: 57}}>
          <PickerComponent
            description=""
            title="Shipping info"
            onPickerPress={() => {
              navigation.navigate(ScreenName.shippingAddressScreen);
            }}
            customStyle={{
              backgroundColor: AppColors.primaryBackground,
              borderWidth: 0.3,
              borderColor: AppColors.whiteBackground,
            }}
          />
          <PickerComponent
            description=""
            title="Support"
            onPickerPress={() => {
              navigation.navigate(ScreenName.shippingAddressScreen);
            }}
            customStyle={{
              backgroundColor: AppColors.primaryBackground,
              borderWidth: 0.3,
              borderColor: AppColors.whiteBackground,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
          }}>
          <Text style={AppText.mediumTitle}>You can also like this</Text>
          <Text style={AppText.tinyTitle}>{`${PRODUCT.length} item${
            PRODUCT.length > 1 ? 's' : ''
          }`}</Text>
        </View>
        <DividerComponent height={12} />
        <FlatList
          data={PRODUCT}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderProduct}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{
            paddingLeft: 16,
          }}
        />
        <DividerComponent height={20} />
      </ScrollView>
    </View>
  );
};
export default ProductCardScreen;
