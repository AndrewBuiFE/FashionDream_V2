import React from 'react';
import {Text, View} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';
const CategoriesScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title="Categories"
      />
      <ScrollableTabView
        style={{marginTop: 20}}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}>
        <Text tabLabel="Tab #1">My</Text>
        <Text tabLabel="Tab #2 word word">favorite</Text>
        <Text tabLabel="Tab #3 word word word">project</Text>
        <Text tabLabel="Tab #4 word word word word">favorite</Text>
        <Text tabLabel="Tab #5">project</Text>
      </ScrollableTabView>
    </View>
  );
};
export default CategoriesScreen;
