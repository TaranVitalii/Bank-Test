import {IS_IOS, IS_IPHONE_X, ANDROID_STATUS_BAR_HEIGHT} from './deviceHelpers';

const getHeaderHeight = () => {
  const androidStatusBarHeight = ANDROID_STATUS_BAR_HEIGHT
    ? ANDROID_STATUS_BAR_HEIGHT
    : 24;

  if ((IS_IOS && IS_IPHONE_X) || androidStatusBarHeight > 24) return 80;
  if ((IS_IOS && !IS_IPHONE_X) || androidStatusBarHeight < 24) return 60;

  return 60;
};

export default getHeaderHeight;
