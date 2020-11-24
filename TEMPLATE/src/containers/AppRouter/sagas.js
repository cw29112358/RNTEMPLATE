/*
 *
 * AppRouter sagas
 *
 */

import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import I18n from 'react-native-i18n';

import * as StrapiApi from 'apis/strapi';

import { DAEMON } from 'utils/constants';
import auth from 'utils/auth';
import {
  executeFunction,
  // setIsOnline,
} from 'utils/helpers';

import {
  CHANGE_LANGUAGE,
  USER_LOGIN_JWT_TOKEN,
} from './constants';
import {
  changeLanguageSuccessAction,
  loggedInByUserAction,
  loggedInByUserFailAction,
} from './actions';

export function* changeLanguage(action) {
  try {
    const { language } = action;
    const hasLanguage = I18n.translations[language];
    if (hasLanguage) {
      I18n.locale = language;
      auth.set(language, 'language');
      yield put(changeLanguageSuccessAction(language));
    } else {
      console.warn('Don\'t have this language!');
    }
  } catch (err) {
    console.warn('change language error', err);
  }
}

export function* watchChangeLanguage() {
  yield takeLatest(CHANGE_LANGUAGE, changeLanguage);
}

export function* logInByJwtToken(action) {
  const { onSuccess, onFail } = action;
  try {
    const authUser = yield call(StrapiApi.logInByJwtToken);
    // validProfile(authUser);
    yield put(loggedInByUserAction(authUser));
    executeFunction(onSuccess);
  } catch (err) {
    yield put(loggedInByUserFailAction(err));
    executeFunction(onFail);
  }
}
export function* watchlogInByJwtToken() {
  yield takeLatest(USER_LOGIN_JWT_TOKEN, logInByJwtToken);
}

export function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield all([
    watchChangeLanguage(),
    watchlogInByJwtToken(),
  ]);
}

export default [
  {
    key: 'rootSaga',
    saga: rootSaga,
    mode: DAEMON,
  },
];
