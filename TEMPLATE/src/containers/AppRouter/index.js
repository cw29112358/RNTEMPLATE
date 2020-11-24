/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/* global window */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
// import I18n from 'react-native-i18n';
import { createPropsSelector } from 'reselect-immutable-helpers';

import AppRoutes from 'src/AppRoutes';
import RNToast from 'components/RNToast';

import { translate, executeFunction, clearLoginAuthKey } from 'utils/helpers';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import auth from 'utils/auth';

import {
  changeLanguageAction,
  logInByJwtTokenAction,
} from './actions';
import { selectIsLoggedIn } from './selectors';
import reducer from './reducer';
import sagas from './sagas';

// 注册全局翻译函数
window.translate = translate;

// 注册全局 alert 函数
window.alert = (title, message, buttons, options = {}, type) => {
  const {
    titleTranslate = true,
    messageTranslate = true,
    buttonTranslate = true,
    ...otherOptions
  } = options;

  const translateText = (label, isTranslate) => (isTranslate ? window.translate(label) : label);

  const alertButtons = buttons || [{ text: 'confirm' }];
  const translateButtons = alertButtons.map((item) => {
    const { text, buttonTranslate: itemButtonTranslate = true } = item;

    return {
      ...item,
      text: translateText(text, buttonTranslate && itemButtonTranslate),
    };
  });

  Alert.alert(
    translateText(title, titleTranslate),
    translateText(message, messageTranslate),
    translateButtons,
    otherOptions,
    type,
  );
};

// 注册全局 toast 函数
window.toast = (title = '', message = '', type = '', duration = 2500, isTranslate = true) => {
  RNToast.show({
    duration,
    position: 'middle',
    type,
    text: isTranslate ? translate(`${title}${message ? `\n ${message}` : ''}`) : `${title}${message ? `\n ${message}` : ''}`,
  });
};

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true, // 启动屏的显隐
    };

    window.validIsLoggedIn = this.validIsLoggedIn; // 注册全局验证用户是否登录函数
    window.changeLanguage = this.onChangeLanguage; // 注册全局设置语言函数
  }

  componentWillMount() {
    this.onInitLanguage(); // 设置语言
    this.onLogInByJwtToken(); // 刷新登陆
    // this.loadHomeSceneData(); // 加载HomeScene的数据
  }

  // 验证是否登陆
  validIsLoggedIn = (loginCallback, backToEntry = true) => {
    const isLoggedIn = this.getIsLoggedIn();
    if (isLoggedIn) {
      executeFunction(loginCallback);
    } else if (backToEntry) {
      Actions.reset('entry');
    }
  }
  // 切换语言
  onChangeLanguage = (language) => {
    const { changeLanguage } = this.props;
    changeLanguage(language);
  }

  // 设置语言
  onInitLanguage = async () => {
    // let language = await auth.get('language');
    //
    // if (!language) {
    //   language = 'zh';
    // }
    this.onChangeLanguage('zh');
  }

  // 刷新登陆
  onLogInByJwtToken = async () => {
    const { logInByJwtToken } = this.props;
    const accessToken = await auth.getToken();
    const isOnline = await auth.get('isOnline');

    if (isOnline === 'true' && accessToken) {
      logInByJwtToken(this.onLogInByJwtTokenSuccess, this.onHideSplashScreenAndClearKey);
    } else {
      this.onHideSplashScreenAndClearKey();
    }
  }
  onLogInByJwtTokenSuccess = () => this.onHideSplashScreen()
  onHideSplashScreenAndClearKey = () => {
    clearLoginAuthKey();
    this.onHideSplashScreen();
  }
  // 隐藏Splash
  onHideSplashScreen = () => {
    // SplashScreen.hide(); // 关闭启动屏
    this.setState({ showSplash: false }); // 关闭启动屏
  }

  // 加载HomeScene的数据
  // loadHomeSceneData = () => {
  //   const { loadInventory } = this.props;
  //   loadInventory();
  // }

  // 判断是否登陆
  getIsLoggedIn = () => {
    const { isLoggedIn } = this.props;
    return isLoggedIn;
  }

  // 判断进入app显示哪一页面
  getInitialKey = () => {
    const isLoggedIn = this.getIsLoggedIn();
    if (!isLoggedIn) return 'entry';
    return 'home';
  }

  render() {
    const { showSplash } = this.state;
    if (showSplash) return null;

    const initialKey = this.getInitialKey();
    return <AppRoutes initialKey={initialKey} />;
  }
}

AppRouter.defaultProps = {
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired, // 用户是否登录
  changeLanguage: PropTypes.func.isRequired, // 设置语言
  logInByJwtToken: PropTypes.func.isRequired, // 刷新登陆
};

const mapStateToProps = createPropsSelector({
  isLoggedIn: selectIsLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => dispatch(changeLanguageAction(language)),
  logInByJwtToken: (onSuccess, onFail) => dispatch(logInByJwtTokenAction(onSuccess, onFail)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const withReducer = injectReducer({ key: 'appRouter', reducer });

export const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withConnect,
  withReducer,
  ...withSagas,
)(AppRouter);
