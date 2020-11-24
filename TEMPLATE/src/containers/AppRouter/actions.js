/*
 *
 * AppRouter actions
 *
 */

import {
  CHANGE_LANGUAGE,
  CHANGE_LANGUAGE_SUCCESS,

  USER_LOGIN_JWT_TOKEN,

  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from './constants';

export function changeLanguageAction(language) {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
}
export function changeLanguageSuccessAction(language) {
  return {
    type: CHANGE_LANGUAGE_SUCCESS,
    language,
  };
}

export function logInByJwtTokenAction(onSuccess, onFail) {
  return {
    type: USER_LOGIN_JWT_TOKEN,
    onSuccess,
    onFail,
  };
}

export function loggedInByUserAction(authUser, isOnlyValid) {
  return {
    type: USER_LOGIN_SUCCESS,
    authUser,
    isOnlyValid,
  };
}
export function loggedInByUserFailAction(error, isOnlyValid) {
  return {
    type: USER_LOGIN_FAIL,
    error,
    isOnlyValid,
  };
}
