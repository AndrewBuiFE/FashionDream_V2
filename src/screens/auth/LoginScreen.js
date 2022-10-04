/* eslint-disable no-shadow */
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import Api from '../../controllers/apis/Api';
import {setAxiosHeader} from '../../controllers/axios/axiosSendRequest';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';
import Utils from '../../shared/helpers/Utils';
import {
  setAppAccessToken,
  setAppLogin,
  setUserInfo,
} from '../../stores/slices/SystemSlice';
const LoginScreen = () => {
  // hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // utitlity function
  var ggSignin = async () => {
    try {
      console.log('[Signing in...]');
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(setAppLogin(true));
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );
      // Sign-in the user with the credential
      const userSignIn = await auth().signInWithCredential(googleCredential);
      dispatch(setUserInfo(userSignIn.additionalUserInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  var signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch(setAppLogin(false));
      dispatch(setUserInfo({}));
      console.log('[Signing out...]');
    } catch (error) {
      console.error(error);
    }
  };
  // function onAuthStateChanged(user) {
  //   dispatch(setUserInfo(user));
  //   if (user) {
  //     dispatch
  //   }
  // }

  // effect
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '1018660133102-u8pqahdogjrh2us1tv28e8j7cjn3u5np.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);
  return (
    <View style={styles.container}>
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        title="Login"
        onLeftIconPress={() => {
          Utils.goBack(navigation);
        }}
      />
      <View style={{paddingHorizontal: 16}}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={async (value, {resetForm}) => {
            console.log('Value: ', value);
            const params = {
              email: value.email,
              password: value.password,
            };
            await Api.logIn(params).then(res => {
              console.log('res', res);
              if (res.statusCode == 200 && res.data) {
                dispatch(setAppAccessToken(res.data.accessToken));
                setAxiosHeader(
                  'Authorization',
                  `Bearer ${res.data.accessToken}`,
                );
                navigation.navigate(ScreenName.homeScreen);
              }
            });

            resetForm();
          }}
          validationSchema={Yup.object({
            email: Yup.string('email is invalid')
              .email('email is not valid')
              .required('email should not be left empty'),
            password: Yup.string('password is invalid')
              .min(6)
              .max(18) // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                'password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
              )
              .required('password should not be left empty'),
          })}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            dirty,
            isValid,
            values,
            errors,
            touched,
          }) => {
            return (
              <View>
                <View style={styles.inputSection}>
                  <EditTextComponent
                    isShowLabel
                    isShowRightIcon={!!touched.email}
                    isAlerting={!!errors.email && touched.email}
                    alertText={errors.email}
                    inputLabel="Email"
                    inputText={values.email}
                    onTextEdit={handleChange('email')}
                    onTextBlur={handleBlur('email')}
                  />
                  <DividerComponent height={8} />
                  <EditTextComponent
                    placeholder="Password"
                    isShowRightIcon={!!touched.password}
                    alertText={errors.password}
                    isAlerting={!!errors.password && touched.password}
                    inputText={values.password}
                    onTextEdit={handleChange('password')}
                    onTextBlur={handleBlur('password')}
                  />
                </View>
                <TouchableOpacity
                  style={styles.suggestion}
                  onPress={() => {
                    navigation.navigate(ScreenName.forgotPassScreen);
                  }}>
                  <Text style={AppText.primaryText}>Forgot your password?</Text>
                  <View
                    style={{
                      marginLeft: 3,
                      width: 24,
                      height: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={AppIcons.right_arrow}
                      // style={{width: '100%', height: '100%'}}
                    />
                  </View>
                </TouchableOpacity>
                <RadiusButton
                  title="LOGIN"
                  type={isValid && dirty ? 'redButton' : 'disabledButton'}
                  onButtonPress={async () => {
                    if (isValid && dirty) {
                      handleSubmit();
                    }
                  }}
                  buttonCustomStyle={{marginTop: 30}}
                />
              </View>
            );
          }}
        </Formik>

        <View style={{marginTop: 194, alignItems: 'center'}}>
          <Text style={AppText.primaryText}>Or login with social account</Text>
        </View>
        <View style={styles.socialSection}>
          <CircleButton
            isSocialButton
            icon={AppIcons.google}
            onButtonPress={() => {
              ggSignin();
            }}
          />
          <CircleButton
            isSocialButton
            icon={AppIcons.facebook}
            customStyle={{marginLeft: 16}}
            onButtonPress={() => {
              signOut();
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryBackground,
    flex: 1,
  },
  inputSection: {
    marginTop: 73,
  },
  suggestion: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 14,
    height: 24,
    alignItems: 'center',
  },
  socialSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
});
