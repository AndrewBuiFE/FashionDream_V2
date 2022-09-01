import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FavoriteScreen from '../screens/favorite/FavoriteScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Stack = createNativeStackNavigator();
const FavoriteNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.favoriteScreen}
        component={FavoriteScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default FavoriteNavigator;
