import * as commonColor from 'commonColor';
import variables from 'platform';

const {
  isIOS,
} = variables;

export const port = 3000;
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';

// 邮箱
export const email = '514102209@qq.com';

// AppHeader阴影
export const APP_HEADER_SHADOW = {
  backgroundColor: commonColor.white,
  shadowColor: commonColor.faintBlack,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 1,
  shadowRadius: 3,
  elevation: 3,
  borderBottomWidth: isIOS ? 0 : 0.5,
};

// 阴影
export const SHADOW = {
  backgroundColor: commonColor.white,
  shadowColor: commonColor.faintBlack,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 1,
  shadowRadius: 3,
  elevation: 3,
};

// 渐变
export const LINEAR_PROPS = {
  linearStart: { x: 0, y: 0 },
  linearEnd: { x: 1, y: 0 },
  linearColors: [commonColor.brand, commonColor.brandInfo],
  linearStyle: {
    width: 80,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// 头像
export const PHOTO_UPLOAD_CONFIG = {
  photoPickerTitle: '选取照片',
  imagePickerProps: {
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '从相册中选择照片',
    cancelButtonTitle: '取消',
  },
};

// 性别
export const OPTIONS_GENDER = [
  { label: 'male', value: 'male' },
  { label: 'female', value: 'female' },
];

// DateTimeSelectInput
export const DATE_CONFIG = {
  locale: 'zh-Hans',
  cancelTextIOS: '取消',
  confirmTextIOS: '确认',
};
