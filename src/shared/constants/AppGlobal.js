import {Dimensions} from 'react-native';
import {AppColors} from './AppColors';

export const AppText = {
  largeTitle: {
    color: AppColors.primaryText,
    fontFamily: 'Metropolis',
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
