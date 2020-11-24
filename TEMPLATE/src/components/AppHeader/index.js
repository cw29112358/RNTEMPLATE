/**
*
* AppHeader Stateless Component
*
*/

/* global translate */
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
  Text,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

import AppStatusBar from 'components/AppStatusBar';

import styles from './styles';

const AppHeader = (props) => {
  const {
    headerSettings, hasShadow, hiddenBorder, hasStatusBar,
    hasLeft, leftButton, leftPress, leftIcon, leftIconName, backMessage,
    hasRight, rightPress, rightButton, headerStyle,
    hasTitle, title, titleStyle,
    isTranslate,
  } = props;
  const { transparent } = headerSettings;

  const headStyle = [styles.headStyle];
  if (hasShadow) headStyle.push(styles.shadow);
  if (hiddenBorder) headStyle.push(styles.headerBorder);

  let buttonSettings;
  let defaultTitleStyle = {};
  if (headerSettings.transparent) {
    buttonSettings = {
      dark: true,
      transparent: true,
    };
    defaultTitleStyle = styles.transparentTitle;
  }

  const iconStyle = [styles.iconNormal];
  if (leftIconName === 'close' && styles.isIOS) iconStyle.push(styles.iconLarge);
  const left = leftButton || (
    <Button
      onPress={leftPress}
      {...buttonSettings}
      style={styles.button}
    >
      {leftIcon
        ? <Image source={leftIcon} style={styles.imageSize} />
        : <Icon name={leftIconName} style={iconStyle} />
      }
      <Text>{isTranslate ? translate(backMessage) : backMessage}</Text>
    </Button>
  );
  const right = rightButton || (
    <Button
      onPress={rightPress}
      {...buttonSettings}
      style={styles.button}
    >
      <Icon ios="ios-menu" android="md-menu" style={styles.rightIcon} />
    </Button>
  );
  const body = (
    <Title style={[defaultTitleStyle, titleStyle]}>
      {isTranslate ? translate(title) : title}
    </Title>
  );

  return (
    <Header
      {...headerSettings}
      style={[headStyle, headerStyle]}
    >
      { hasStatusBar && <AppStatusBar transparent={transparent} /> }
      <Left>
        { hasLeft && left }
      </Left>
      <Body>
        { hasTitle && body }
      </Body>
      <Right style={styles.rightButton}>
        { hasRight && right }
      </Right>
    </Header>
  );
};

AppHeader.defaultProps = {
  // StatusBar
  hasStatusBar: true,
  // header left params
  hasLeft: true,
  leftPress: () => Actions.pop(),
  leftButton: null,
  leftIcon: null,
  leftIconName: 'ios-arrow-back',
  backMessage: '',
  // header center params
  hasTitle: true,
  title: '',
  titleStyle: {},
  // header right params
  hasRight: false,
  rightPress: undefined,
  rightButton: null,
  // header container params
  hasShadow: true,
  hiddenBorder: false,
  headerSettings: {},
  headerStyle: {},
  // translate
  isTranslate: true,
};

AppHeader.propTypes = {
  // StatusBar
  hasStatusBar: PropTypes.bool,
  // header left params
  hasLeft: PropTypes.bool,
  leftPress: PropTypes.func,
  leftButton: PropTypes.any,
  leftIcon: PropTypes.any,
  leftIconName: PropTypes.string,
  backMessage: PropTypes.string,
  // header center params
  hasTitle: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  // header right params
  hasRight: PropTypes.bool,
  rightPress: PropTypes.func,
  rightButton: PropTypes.any,
  // header container params
  hasShadow: PropTypes.bool,
  hiddenBorder: PropTypes.bool,
  headerSettings: PropTypes.object,
  headerStyle: PropTypes.object,
  // translate
  isTranslate: PropTypes.bool,
};

export default AppHeader;
