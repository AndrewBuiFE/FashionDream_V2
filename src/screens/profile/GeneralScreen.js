import {useNavigation} from '@react-navigation/native';
import {random, range} from 'lodash';
import React, {useCallback, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {VictoryBar, VictoryChart} from 'victory-native';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppConfig} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';
import {ScreenName} from '../../shared/constants/ScreenName';
import {handleShare, sendEmailContact} from '../../utils/Utils';

const GeneralScreen = () => {
  // common hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const {userInfo, appLogin, accessToken} = useSelector(state => state.system);
  // utility functions
  const keyExtractor = useCallback(item => item.id, []);
  function getData() {
    const bars = random(6, 10);
    return range(bars).map(bar => {
      return {x: bar + 1, y: random(2, 10)};
    });
  }
  // rendering functions
  useEffect(() => {
    if (!appLogin || userInfo.length == 0 || accessToken.length === 0) {
      navigation.navigate(ScreenName.loginScreen, {canGoBack: false});
    }
  }, [appLogin, userInfo, navigation, accessToken]);
  // useEffect(() => {
  //   setInterval(() => {
  //     setData(getData());
  //   }, 3000);
  // });
  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title="General settings"
        onLeftIconPress={goBack}
      />
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              ...styles.buttonAccount,
              marginBottom: 16,
              borderRadius: 10,
            }}
            onPress={() => {}}>
            <View
              style={{
                borderWidth: 0,
                borderRadius: 100,
                borderColor: '#888caf',
              }}>
              <FastImage
                source={
                  typeof userInfo?.profile?.picture === 'string' &&
                  userInfo?.profile?.picture.startsWith('http')
                    ? {uri: userInfo?.profile?.picture}
                    : AppImages.man_1
                }
                style={{
                  ...styles.icon,
                }}
              />
            </View>
            <View style={{paddingLeft: 5}}>
              <Text style={{...styles.title, fontSize: 20}}>
                {userInfo?.profile?.given_name && userInfo?.profile?.family_name
                  ? `${userInfo?.profile?.given_name} ${userInfo?.profile?.family_name}`
                  : 'Log In'}
              </Text>
              {!userInfo?.profile?.email ? null : (
                <Text style={styles.description}>
                  {userInfo?.profile?.email}
                </Text>
              )}
            </View>
          </TouchableOpacity>
          <View>
            <VictoryChart domainPadding={{x: 20}} animate={{duration: 500}}>
              <VictoryBar
                data={getData()}
                style={{
                  data: {fill: 'tomato', width: 12},
                }}
                animate={{
                  onExit: {
                    duration: 1000,
                    before: () => ({
                      _y: 0,
                      fill: 'orange',
                      label: 'BYE',
                    }),
                  },
                }}
              />
            </VictoryChart>
          </View>
          <View
            style={{
              marginBottom: 16,
              width: '100%',
            }}
          />
          <View
            style={{
              marginBottom: 16,
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                ...styles.button,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              onPress={() => {
                sendEmailContact();
              }}>
              <Image source={AppIcons.contact} style={styles.iconButton} />
              <Text style={styles.title}>Contact Support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
              }}
              onPress={() => handleShare()}>
              <Image source={AppIcons.ic_share} style={styles.iconButton} />
              <Text style={styles.title}>Share the app</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
              }}
              onPress={() => {
                navigation.navigate(ScreenName.webViewScreen, {
                  url: AppConfig.urlPrivacyPolicy,
                  title: 'Privacy Policy',
                });
              }}>
              <Image
                style={styles.iconButton}
                source={AppIcons.privacy_policy}
              />
              <Text style={styles.title}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
              }}
              onPress={() => {
                navigation.navigate(ScreenName.webViewScreen, {
                  url: AppConfig.urlTerms,
                  title: 'Terms of Service',
                });
              }}>
              <Image style={styles.iconButton} source={AppIcons.term} />
              <Text style={styles.title}>Term of Service</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
              }}
              onPress={() => {
                // reviewApp();
              }}>
              <Image style={styles.iconButton} source={AppIcons.ic_rate} />
              <Text style={styles.title}>Rate App</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              onPress={() => {
                navigation.navigate(ScreenName.webViewScreen, {
                  url: AppConfig.urlHelp,
                  title: 'Help',
                });
              }}>
              <Image style={styles.iconButton} source={AppIcons.ic_help} />
              <Text style={styles.title}>Help</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 60,
              width: '100%',
              paddingTop: 20,
              alignItems: 'center',
            }}>
            <Text
              style={
                styles.title
              }>{`V-${AppConfig.version}-${AppConfig.codePushVersion}`}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default GeneralScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    aspectRatio: 327 / 119,
  },
  buttonAccount: {
    width: '100%',
    height: 80,
    backgroundColor: AppColors.lightDark,
    justifyContent: 'flex-start',
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: AppColors.primaryText,
    paddingLeft: 5,
    fontFamily: 'Metropolis',
    marginTop: 2,
    fontSize: 14,
  },
  description: {
    color: '#888CAF',
    paddingLeft: 5,
    fontSize: 14,
    fontFamily: 'Metropolis',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: AppColors.lightDark,
    justifyContent: 'flex-start',
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderTopColor: '#ABB4BD60',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  iconButton: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Metropolis',
    paddingLeft: 5,
    fontWeight: '500',
    color: AppColors.primaryText,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});
