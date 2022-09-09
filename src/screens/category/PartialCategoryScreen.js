import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import DividerComponent from '../../components/DividerComponent';
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
  {
    id: 4,
    title: 'Tops',
  },
  {
    id: 5,
    title: 'Shoes',
  },
  {
    id: 6,
    title: 'Blazers',
  },
  {
    id: 7,
    title: 'Tops',
  },
  {
    id: 8,
    title: 'Shoes',
  },
  {
    id: 9,
    title: 'Blazers',
  },
  {
    id: 10,
    title: 'Tops',
  },
  {
    id: 11,
    title: 'Shoes',
  },
  {
    id: 12,
    title: 'Blazers',
  },
  {
    id: 13,
    title: 'Tops',
  },
  {
    id: 14,
    title: 'Shoes',
  },
  {
    id: 15,
    title: 'Blazers',
  },
];
const PartialCategoryScreen = () => {
  const navigation = useNavigation();
  const goBack = navigation.goBack;

  // rendering functions
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
  const renderFooter = () => <DividerComponent height={20} />;

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
      <View style={{marginTop: 16, marginLeft: 16}}>
        <Text style={[AppText.tinyTitle]}>Choose category</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={LIST_CATEGORY}
          renderItem={renderListCate}
          ListFooterComponent={renderFooter}
        />
      </View>
    </View>
  );
};

export default PartialCategoryScreen;
