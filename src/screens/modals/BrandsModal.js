import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {BRANDS} from '../../assets/data';
import CheckBox from '../../components/CheckBox';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import SearchBar from '../../components/SearchBar';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';

const BrandModals = () => {
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [isActiveBrand, setActiveBrand] = useState(BRANDS.map(() => false));
  console.log('Is active brand: ', isActiveBrand);
  // rendering functions
  const renderBrandRow = useCallback(
    ({item, index}) => {
      let isActive = isActiveBrand[index];
      return (
        <CheckBox
          type="redCheckbox"
          hasTexts
          textLeft={item}
          hasTextLeft
          customStyle={{justifyContent: 'space-between'}}
          isCheck={isActive}
          onCheck={() => {
            setActiveBrand(curState => {
              let newState = curState.map((state, index1) => {
                index1 === index;
              });
              return newState;
            });
          }}
          textStyle={{color: isActive ? AppColors.primaryRed : null}}
        />
      );
    },
    [isActiveBrand],
  );
  const renderSeparator = useCallback(() => {
    return <DividerComponent height={28} />;
  }, []);
  const renderFooter = useCallback(() => {
    return <DividerComponent height={20} />;
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        title="Brand"
        onLeftIconPress={goBack}
        leftIcon={AppIcons.back_arrow}
      />
      <View style={{marginHorizontal: 16, flex: 1}}>
        <DividerComponent height={21} />
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
          // height: 104,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
          shadowOffset: {width: 0, height: -4},
          shadowRadius: 16,
          shadowColor: '#1A1B20',
        }}>
        <RadiusButton
          type="disabledButton"
          title="Discard"
          buttonCustomStyle={{width: 160, height: 36}}
        />
        <RadiusButton
          type="redButton"
          title="Apply"
          buttonCustomStyle={{width: 160, height: 36}}
        />
      </View>
    </View>
  );
};
export default BrandModals;
