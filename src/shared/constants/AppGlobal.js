import {Dimensions} from 'react-native';
import {AppColors} from './AppColors';

export const GeneralConfig = {
  maxHomeProductItems: 20,
  firstRun: true,
  ignoreGetConfig: false,
  showIntro: true,
  isPro: false,
  showCopilot: {
    newFeedScreen: true,
    voiceSpeed: true,
    readerSpeed: true,
  },
  version: '',
  codePushVersion: '',
  token: '',
  urlPrivacyPolicy:
    'https://speechin.htcsoftware.net/url_privacy_policy_ios.php',
  urlTerms: 'https://speechin.htcsoftware.net/url_terms_ios.php',
  urlHelp: 'https://speechin.htcsoftware.net/url_help_ios.php',
  emailFeedback: 'support@visearch.net',
  timeIntervalAskUserUpgrade: 5 * 24 * 60 * 60, // seconds between ask user upgrade app
  timeIntervalAskUserResubscription: 1 * 24 * 60 * 60, // seconds between ask user resubscription app
  timeIntervalAskUserUpdate: 1 * 24 * 60 * 60, // seconds between ask user update app
  codepushDeploymentKey: 'urNOtDhE5oh1BIJDiMCPOEKIAxWHD5lvYc6Al',
};
export const AppText = {
  largeTitle: {
    color: AppColors.primaryText,
    fontFamily: 'Metropolis',
    fontWeight: '800',
    fontSize: 34,
    lineHeight: 34,
  },
  primaryText: {
    color: AppColors.primaryText,
    fontFamily: 'Metropolis',
    fontSize: 14,
    lineHeight: 20,
  },
  primaryTextBlack: {
    color: AppColors.blackText,
    fontFamily: 'Metropolis',
    fontSize: 11,
    lineHeight: 11,
  },
  secondaryText: {
    color: AppColors.blackText,
    fontFamily: 'Metropolis',
    fontSize: 11,
    lineHeight: 11,
  },
  secondaryTextBlack: {
    color: AppColors.primaryText,
    fontFamily: 'Metropolis',
    fontSize: 11,
    lineHeight: 11,
  },
  mediumTitle: {
    color: AppColors.primaryText,
    fontFamily: 'Metropolis',
    // fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
  smallTitle: {
    color: AppColors.primaryText,
    fontFamily: 'Metropolis',
    fontSize: 16,
    lineHeight: 16,
  },
  tinyTitle: {
    color: AppColors.smallTitleText,
    fontFamily: 'Metropolis',
    fontSize: 11,
    lineHeight: 11,
  },
  errorText: {
    color: AppColors.error,
    fontFamily: 'Metropolis',
    fontSize: 11,
    lineHeight: 11,
  },
};

export const DeviceConstant = {
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
};
