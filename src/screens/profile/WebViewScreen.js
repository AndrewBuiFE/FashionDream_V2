import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';
const WebViewScreen = () => {
  // hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const route = useRoute();
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title={route?.params?.title}
        onLeftIconPress={goBack}
      />
      <WebView source={{uri: route?.params?.url}} />
    </View>
  );
};
export default WebViewScreen;
