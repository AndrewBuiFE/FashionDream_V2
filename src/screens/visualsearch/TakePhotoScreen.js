import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import { AppColors } from '../../shared/constants/AppColors';
import { AppIcons } from '../../shared/constants/AppIcons';
const TakePhotoScreen = () => {
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        title="Search by taking a photo"
        leftIcon={AppIcons.back_arrow}
        onLeftIconPress={goBack}
      />
    </View>
  );
};
export default TakePhotoScreen;
