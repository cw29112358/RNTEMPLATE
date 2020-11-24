/**
 *
 * EntryScene Container
 *
 */
/* global translate */

import React from 'react';
import { compose } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  Text,
  View,
  Button,
} from 'native-base';
import {
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

import bg from 'assets/bg_lending_car.png';
// import logo from 'assets/appIcon.png';
import logoTitle from 'assets/logoTitle.png';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { loadExampleAction } from './actions';
import { selectExample, selectIsExampleLoading } from './selectors';
import sagas from './sagas';
import reducer from './reducer';
import styles from './styles';

const EntryScene = () => (
  <ImageBackground source={bg} style={styles.backgroundImage}>
    <StatusBar barStyle="light-content" />
    <View style={styles.contentView}>
      <Button
        style={styles.lookButton}
        onPress={() => Actions.push('home')}
      >
        <Text style={styles.lookText}>{translate('takeLook')}</Text>
      </Button>

      {/* <Image source={logo} style={styles.logo} /> */}
      <Image source={logoTitle} style={styles.logoTitle} />
      <View style={styles.buttonGroup}>
        <Button style={[styles.button, styles.logInButton]} onPress={() => Actions.push('login')}>
          <Text style={[styles.buttonText, styles.logInText]}>{translate('login')}</Text>
        </Button>
        <Button
          style={[styles.button, styles.signButton]}
          onPress={() => Actions.push('signUp')}
        >
          <Text style={styles.signUpText}>{translate('signUp')}</Text>
        </Button>
      </View>
    </View>
  </ImageBackground>
);

EntryScene.defaultProps = {
};

EntryScene.propTypes = {
  // example: PropTypes.string.isRequired, // 例子
  // isExampleLoading: PropTypes.bool.isRequired,
  // loadExample: PropTypes.func.isRequired, // 加载例子
};

const mapStateToProps = createPropsSelector({
  example: selectExample,
  isExampleLoading: selectIsExampleLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadExample: () => dispatch(loadExampleAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const withReducer = injectReducer({ key: 'entryScene', reducer });

export const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withConnect,
  withReducer,
  ...withSagas,
)(EntryScene);
