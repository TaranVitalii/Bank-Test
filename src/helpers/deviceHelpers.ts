import {Dimensions, Platform, StatusBar} from 'react-native';

export const IS_IPHONE_X_XS =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (Dimensions.get('window').height === 812 ||
    Dimensions.get('window').width === 812);

export const IS_IPHONE_X_MAX_XR =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (Dimensions.get('window').height === 896 ||
    Dimensions.get('window').width === 896);

export const IS_IOS = Platform.OS === 'ios';
export const IS_IPHONE_X = IS_IPHONE_X_XS || IS_IPHONE_X_MAX_XR;

export const ANDROID_STATUS_BAR_HEIGHT = !IS_IOS && StatusBar.currentHeight;

export default {
  IS_IPHONE_X_XS,
  ANDROID_STATUS_BAR_HEIGHT,
  IS_IPHONE_X_MAX_XR,
  IS_IOS,
  IS_IPHONE_X,
};
