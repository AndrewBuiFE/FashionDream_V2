import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, Platform} from 'react-native';
import ConfirmDialog, {
  ConfirmDialogRef,
} from '../components/dialog/ConfirmDialog';
import ScaleToast from '../components/toast/ScaleToast';
import ActionSheet from '../screens/modals/ActionSheet';
import {AppColors} from '../shared/constants/AppColors';
import {AppIcons} from '../shared/constants/AppIcons';
import {ScreenName} from '../shared/constants/ScreenName';
import CartNavigator from './CartNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import ShopNavigator from './ShopNavigator';

const Tab = createBottomTabNavigator();
const TabIcons = {
  [ScreenName.homeNavigator]: {
    icon: [AppIcons.home_active, AppIcons.home_inactive],
  },
  [ScreenName.shopNavigator]: {
    icon: [AppIcons.shop_active, AppIcons.shop_inactive],
  },
  [ScreenName.cartNavigator]: {
    icon: [AppIcons.bag_active, AppIcons.bag_inactive],
  },
  [ScreenName.favoriteNavigator]: {
    icon: [AppIcons.heart_active, AppIcons.heart_inactive],
  },
  [ScreenName.profileNavigator]: {
    icon: [AppIcons.profile_active, AppIcons.profile_inactive],
  },
};
const AppNavigator = () => {
  // const {t, i18n} = useTranslation('i18n');

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ScreenName.homeNavigator}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={
                  focused
                    ? TabIcons[route.name].icon[0]
                    : TabIcons[route.name].icon[1]
                }
              />
            );
          },
          tabBarStyle: {
            // height: 83,
            // borderTopRightRadius: 12,
            // borderTopLeftRadius: 12,
            backgroundColor: AppColors.primaryBackground,
            borderTopColor: AppColors.primaryBackground,
            borderTopWidth: 1,
            shadowColor: '#1A1B20',
            shadowOffset: {width: 0, height: -4},
            shadowRadius: 20,
            elevation: 2,
          },
          tabBarItemStyle: {
            backgroundColor: AppColors.primaryBackground,
            borderColor: AppColors.primaryBackground,
            shadowColor: '#1A1B20',
            shadowOffset: {width: 0, height: -4},
            shadowRadius: 20,
            elevation: 2,
          },
          // tabBarBadge: '1',
          tabBarBadgeStyle: {
            // backgroundColor: 'blue',
          },
          tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
          tabBarInactiveTintColor: AppColors.smallTitleText,
          tabBarActiveTintColor: AppColors.primaryRed,
          headerShown: false,
        })}>
        <Tab.Screen
          name={ScreenName.homeNavigator}
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name={ScreenName.shopNavigator}
          component={ShopNavigator}
          options={{
            tabBarLabel: 'Shop',
          }}
        />
        <Tab.Screen
          name={ScreenName.cartNavigator}
          component={CartNavigator}
          options={{
            tabBarLabel: 'Bag',
          }}
        />
        <Tab.Screen
          name={ScreenName.favoriteNavigator}
          component={FavoriteNavigator}
          options={{
            tabBarLabel: 'Favorites',
          }}
        />
        <Tab.Screen
          name={ScreenName.profileNavigator}
          component={ProfileNavigator}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
      <ScaleToast />
      <ActionSheet />
      <ConfirmDialog dialogRef={ConfirmDialogRef} />
    </NavigationContainer>
  );
};
export default AppNavigator;
