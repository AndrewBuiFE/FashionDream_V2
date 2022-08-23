import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CategoriesScreen from '../screens/category/CategoriesScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.categoriesScreen}
        component={CategoriesScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default ShopNavigator;
