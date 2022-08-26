import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';
const LIST_CATEGORY = [
  {
    id: 1,
    title: 'Tops',
  },
  {
    id: 2,
    title: 'Shoes',
  },
  {
    id: 3,
    title: 'Blazers',
  },
];
const PartialCategoryScreen = () => {
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const renderListCate = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{}}
        onPress={() => {
          navigation.navigate(ScreenName.catalogScreen, {
            title: item.title,
          });
        }}>
        <View
          style={{
            borderBottomWidth: 0.4,
            borderBottomColor: '#ABB4BD',
            paddingVertical: 15,
          }}>
          <Text
            style={
              ([AppText.smallTitle],
              {color: AppColors.primaryText, marginLeft: 40})
            }>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderHeader = () => {
    return (
      <Text style={[AppText.tinyTitle, {marginTop: 16, marginLeft: 16}]}>
        Choose category
      </Text>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title="Categories"
        onLeftIconPress={goBack}
      />
      <View style={{marginTop: 16, marginHorizontal: 16}}>
        <RadiusButton
          title="VIEW ALL ITEMS"
          type="redButton"
          buttonCustomStyle={{}}
        />
      </View>
      <FlatList
        data={LIST_CATEGORY}
        renderItem={renderListCate}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default PartialCategoryScreen;
