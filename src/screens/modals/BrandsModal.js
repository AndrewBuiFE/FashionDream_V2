import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import CheckBox from '../../components/CheckBox';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import SearchBar from '../../components/SearchBar';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';

const BRANDS = [
  'adidas',
  'adidas Originals',
  'Blend',
  'Boutique',
  'Champion',
  'Diesel',
  'Naf naf',
  'Valentino',
  'Dolce & Gabbana',
  'adidas',
  'adidas Originals',
  'Blend',
  'Boutique',
  'Champion',
  'Diesel',
  'Naf naf',
  'Valentino',
  'Dolce & Gabbana',
];
const BrandModals = () => {
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  // rendering functions
  const renderBrandRow = ({item, index}) => {
    return (
      <CheckBox type="whiteCheckbox" hasText textLeft={item} hasTextLeft />
    );
  };
  const renderSeparator = () => {
    return <DividerComponent height={28} />;
  };
  const renderFooter = () => {
    return <DividerComponent height={20} />;
  };
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        title="Brand"
        onLeftIconPress={goBack}
        leftIcon={AppIcons.back_arrow}
      />
      <View style={{marginHorizontal: 16, flex: 1}}>
        <SearchBar placeholder="Search" />
        <DividerComponent height={22} />
        <FlatList
          data={BRANDS}
          renderItem={renderBrandRow}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
        />
      </View>
      <View
        style={{
          height: 104,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
          backgroundColor: AppColors.tabBar,
        }}>
        <RadiusButton
          type="disabledButton"
          title="Discard"
          buttonCustomStyle={{width: 160}}
        />
        <RadiusButton
          type="redButton"
          title="Apply"
          buttonCustomStyle={{width: 160}}
        />
      </View>
    </View>
  );
};
export default BrandModals;
