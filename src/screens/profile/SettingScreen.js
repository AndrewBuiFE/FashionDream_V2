import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Switch, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonSwitch from '../../components/ButtonSwitch';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {setAppLanguage} from '../../stores/slices/SystemSlice';
import {Language} from '../../types/system';
import ChangePasswordModal from '../modals/ChangePasswordModal';
const NOTIFICATION = ['Sales', 'New arrivals', 'Delivery status changes'];
const SettingScreen = () => {
  // hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const dispatch = useDispatch();
  const {language} = useSelector(state => state.system);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isModalVisible, setVisible] = useState(false);
  const [buttonType, setButtonType] = useState(
    language === Language.en ? false : true,
  );
  // utility functions
  const dismissModal = () => {
    setVisible(false);
  };
  const handleLanguageInput = () => {
    switch (language) {
      case Language.vn:
        return {
          languageToChange: Language.en,
        };
      case Language.en:
        return {
          languageToChange: Language.vn,
        };
      default:
        return {
          languageToChange: Language.en,
        };
    }
  };
  const toggleButtonType = () => {
    setButtonType(!buttonType);
    dispatch(setAppLanguage(handleLanguageInput().languageToChange));
  };
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: AppColors.primaryBackground}}
      showsVerticalScrollIndicator={false}>
      <ChangePasswordModal
        dismissModal={dismissModal}
        isModalVisible={isModalVisible}
      />
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title="Settings"
        onLeftIconPress={goBack}
      />
      <View style={{marginHorizontal: 16}}>
        <Text
          style={[
            AppText.primaryText,
            {marginBottom: 21, marginTop: 23, fontWeight: '650'},
          ]}>
          Personal Information
        </Text>
        <EditTextComponent placeholder="Full name" />
        <DividerComponent height={24} />
        <EditTextComponent
          isShowLabel
          inputLabel="Date of Birth"
          inputText="12/12/2012"
        />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 21,
            marginTop: 54,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[AppText.primaryText, {fontWeight: '650'}]}>
            Personal Information
          </Text>
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <EditTextComponent
          isShowLabel
          inputLabel="Password"
          inputText="************"
        />
        <Text
          style={[
            AppText.primaryText,
            {marginBottom: 23, marginTop: 55, fontWeight: '650'},
          ]}>
          Notification
        </Text>
        {NOTIFICATION.map((noti, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 20,
              marginBottom: 24,
            }}>
            <Text style={AppText.primaryText}>{noti}</Text>
            <Switch
              trackColor={AppColors.smallTitleText}
              thumbColor={
                isEnabled ? AppColors.success : AppColors.smallTitleText
              }
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        ))}
        <Text style={[AppText.primaryText, {fontWeight: '650'}]}>Language</Text>
        <ButtonSwitch
          leftTitle="Vietnamese"
          rightTitle="English"
          buttonType={buttonType}
          toggleButtonType={toggleButtonType}
          customStyle={{marginVertical: 23}}
        />
      </View>
    </ScrollView>
  );
};
export default SettingScreen;
