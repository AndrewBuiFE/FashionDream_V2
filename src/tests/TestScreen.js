import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DividerComponent from '../components/DividerComponent';
import {AppColors} from '../shared/constants/AppColors';
import {ScreenName} from '../shared/constants/ScreenName';
const TestScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.primaryBackground,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 50,
        }}
        onPress={() => {
          navigation.navigate(ScreenName.testApi);
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Test api</Text>
      </TouchableOpacity>
      <DividerComponent />
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 50,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Test components</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TestScreen;
