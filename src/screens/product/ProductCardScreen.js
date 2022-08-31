import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {PRODUCT} from '../../assets/data';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import Modalheader from '../../components/ModalHeader';
import PickerComponent from '../../components/PickerComponent';
import ProductItemComponent from '../../components/ProductItemComponent';
import RadiusButton from '../../components/RadiusButton';
import StarComponent from '../../components/StarComponent';
import TagComponent from '../../components/TagComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';

/**
 *
 * @param {string} title
 * @param {import('react-native').StyleProp<import('react-native').ViewStyle>} customStyle
 * @return {JSX.Element}
 */
const SIZE = ['XS', 'S', 'M', 'L', 'XL'];

const ProductCardScreen = props => {
  // common hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [isModalVisible, showDropDownModal] = useState(false);
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
    showDropDownModal(false);
  };
  // rendering functions
  /**
   * @param {string} title
   * @return {JSX.Element}
   */
  const renderDropDown = title => {
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
          showDropDownModal(previous => !previous);
        }}>
        <Text>{title}</Text>
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
  };
  const renderProduct = ({item, index}) => {
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
  };
  const renderSelectSizeModal = () => (
    <View>
      <Text>Select size</Text>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <ReactNativeModal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        avoidKeyboard
        backdropColor="rgba(0, 0, 0, 0.3)"
        hasBackdrop
        coverScreen
        statusBarTranslucent={true}
        backdropTransitionInTiming={200}
        onBackdropPress={dismissModal}
        style={{
          margin: 0,
          bottom: 0,
          position: 'absolute',
          width: '100%',
        }}>
        <View
          style={{
            backgroundColor: AppColors.tabBar,
            height: 368,
            borderTopRightRadius: 34,
            borderTopLeftRadius: 34,
          }}>
          <Modalheader />
          <View style={{alignItems: 'center', marginTop: 16}}>
            <Text style={AppText.mediumTitle}>Select size</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 24,
              marginHorizontal: 16,
              backgroundColor: 'red',
            }}>
            {SIZE.map((cate, index) => {
              return (
                <TagComponent
                  key={index}
                  size="large"
                  tag={cate}
                  shape="round"
                  type="blackTag"
                  hasBorder
                  tagViewStyle={{
                    // marginLeft: index == 0 || index == 3 ? 0 : 22,
                    // marginTop: index < 3 ? 0 : 16,
                    backgroundColor: AppColors.primaryBackground,
                  }}
                />
              );
            })}
          </View>
          <PickerComponent
            title="Size info"
            customStyle={{
              marginTop: 24,
              borderWidth: 0.4,
              borderColor: AppColors.smallTitleText,
            }}
          />
          <View style={{marginHorizontal: 16}}>
            <RadiusButton
              title="ADD TO CART"
              type="redButton"
              buttonCustomStyle={{marginTop: 28}}
            />
          </View>
        </View>
      </ReactNativeModal>
      <HeaderComponent
        type="medium"
        title={product.title}
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.share}
        onLeftIconPress={goBack}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{height: 275, width: '100%'}}>
          <Image
            source={product?.image}
            style={{width: '100%', height: '100%'}}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: 'row',
            marginTop: 12,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>{renderDropDown('Size')}</View>
          <View style={{}}>{renderDropDown('Color')}</View>
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
          <PickerComponent description="" title="Shipping info" />
          <PickerComponent description="" title="Support" />
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
          renderItem={renderProduct}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{height: 260, width: 16}} />
          )}
          ListFooterComponent={() => (
            <DividerComponent height={260} width={16} />
          )}
          contentContainerStyle={{
            // paddingHorizontal: 16,
            paddingLeft: 16,
          }}
        />
        <DividerComponent height={20} />
      </ScrollView>
    </View>
  );
};
export default ProductCardScreen;
