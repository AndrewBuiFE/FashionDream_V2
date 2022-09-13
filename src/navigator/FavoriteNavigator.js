import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FavoriteScreen from '../screens/favorite/FavoriteScreen';
import FilterModals from '../screens/modals/FiltersModal';
import TakePhotoScreen from '../screens/visualsearch/TakePhotoScreen';
import VisualSearchScreen from '../screens/visualsearch/VisualSearchScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Stack = createNativeStackNavigator();
const FavoriteNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.visualSearchScreen}>
      <Stack.Screen
        name={ScreenName.favoriteScreen}
        component={FavoriteScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.filterModals}
        component={FilterModals}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.visualSearchScreen}
        component={VisualSearchScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.takePhotoScreen}
        component={TakePhotoScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default FavoriteNavigator;
