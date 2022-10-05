import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {AppState, Image, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ConfirmDialog, {
  ConfirmDialogRef,
} from '../components/dialog/ConfirmDialog';
import ScaleToast from '../components/toast/ScaleToast';
import ActionSheet from '../screens/modals/ActionSheet';
import {AppColors} from '../shared/constants/AppColors';
import {AppIcons} from '../shared/constants/AppIcons';
import {ScreenName} from '../shared/constants/ScreenName';
import {setAppState} from '../stores/slices/SystemSlice';
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
const tabHiddenRoutes = [ScreenName.loginScreen, ScreenName.introScreen];
const AppNavigator = () => {
  const {t, i18n} = useTranslation('fashion');
  const {language} = useSelector(state => state.system);
  const appState = useRef(AppState.currentState);
  const dispatch = useDispatch();
  console.log('Language: ', language);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      dispatch(setAppState(appState.current));
      console.log('Appstate: ', appState.current);
    });
    return () => {
      // clean up code. Run first when compiler reach useEffect.
      // Anytime component unmount => Call this return first.
      subscription.remove();
    };
  });
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
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
            // display: tabHiddenRoutes.includes(routeName) ? 'none' : 'flex',
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
          options={({route}) => ({
            tabBarLabel: t('BOTTOM_TAB')?.home,
          })}
        />
        <Tab.Screen
          name={ScreenName.shopNavigator}
          component={ShopNavigator}
          options={{
            tabBarLabel: t('BOTTOM_TAB')?.shop,
          }}
        />
        <Tab.Screen
          name={ScreenName.cartNavigator}
          component={CartNavigator}
          options={{
            tabBarLabel: t('BOTTOM_TAB')?.bag,
          }}
        />
        <Tab.Screen
          name={ScreenName.favoriteNavigator}
          component={FavoriteNavigator}
          options={{
            tabBarLabel: t('BOTTOM_TAB')?.favorite,
          }}
        />
        <Tab.Screen
          name={ScreenName.profileNavigator}
          component={ProfileNavigator}
          options={{
            tabBarLabel: t('BOTTOM_TAB')?.profile,
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
