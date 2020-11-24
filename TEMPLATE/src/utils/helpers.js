/* global window */

import React from 'react';
import _ from 'lodash';
import I18n from 'react-native-i18n';
import { Linking } from 'react-native';

import {
  DEV_STRAPI_BASE,
  PROD_STRAPI_BASE,
} from 'configs/strapi-config';

import DollarText from 'components/DollarText';
import variables from 'platform';

import Immutable, { fromJS } from 'immutable';

import zh from 'translations/zh';
import en from 'translations/en';

import auth from 'utils/auth';

I18n.fallbacks = true;
I18n.translations = {
  zh,
  en,
};

const { isPad } = variables;

// common
export const nullFunction = () => null;
export const objectMerge = (object, other) => _.merge({}, object, other);
export const executeFunction = (callback, ...params) => {
  if (typeof callback === 'function') {
    return callback(...params);
  }

  return null;
};

export const openURLByLinking = (url, supportedErrorId = 'notSupportUrl') => {
  Linking
    .canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        window.alert(supportedErrorId);
        return;
      }

      Linking
        .openURL(url)
        .catch((err) => {
          console.warn('openURL error', err);
        });
    })
    .catch((err) => {
      console.warn('An unexpected error happened', err);
    });
};


// 中文翻译
export const translate = (value, type, priceStyle, isFixed) => {
  if (type) {
    switch (type) {
      case 'number': {
        if (typeof value !== 'number') return value;

        return value.toLocaleString();
      }
      case 'dollar':
        return <DollarText value={value} priceStyle={priceStyle} isFixed={isFixed} />;
      default:
        return value;
    }
  }

  if (!value) return value;
  const label = I18n.t(`${value}`);
  if (label.indexOf('[missing') === 0) {
    console.warn(label);
    return _.startCase(value);
  }
  return label;
};

// strApi database
export function getEnvironment() {
  return __DEV__ ? 'dev' : 'prod';
}
export function isDevEnvironment() {
  return __DEV__;
}
export function getBaseStrapi() {
  if (getEnvironment() === 'dev') return DEV_STRAPI_BASE;
  return PROD_STRAPI_BASE;
}

// iPad 尺寸
export const getScaleSize = (normalSize) => isPad ? normalSize * 1.5 : normalSize;

// 把不可变数据转化为js
export const getImmutableData = (result) => Immutable.Iterable.isIterable(result) ? result : fromJS(result);

// specific
export function setIsOnline() {
  auth.set('true', 'isOnline');
}
export function clearLoginAuthKey() {
  auth.clearToken();
  auth.clear('refId');
  auth.clear('isOnline');
}
