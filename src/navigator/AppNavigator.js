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
            height: 48,
            backgroundColor: AppColors.tabBar,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            elevation: 4,
            borderColor: AppColors.primaryBackground,
          },
          tabBarItemStyle: {
            backgroundColor: AppColors.primaryBackground,
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
