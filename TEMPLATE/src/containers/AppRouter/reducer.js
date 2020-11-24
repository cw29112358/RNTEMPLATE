/*
 *
 * AppRouter reducer
 *
 */
import { fromJS } from 'immutable';

import auth from 'utils/auth';

import {
  CHANGE_LANGUAGE_SUCCESS,
  USER_LOGIN_JWT_TOKEN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from './constants';

const initialState = fromJS({
});

function appRouterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE_SUCCESS: {
      return state.set('language', action.language);
    }
    case USER_LOGIN_JWT_TOKEN: {
      return state
        .set('done', false)
        .set('error', false)
        .set('msg', '');
    }
    case USER_LOGIN_SUCCESS: {
      const { authUser } = action;
      const { profile: { refId, id }, jwt } = authUser;

      if (refId) auth.set(refId, 'refId');
      if (jwt) auth.setToken(jwt);

      const result = state
        .set('done', true)
        .set('error', false)
        .set('msg', 'Login in success!');
      if (action.isOnlyValid) return result;

      return result
        .set('authUserId', id)
        .setIn(['users', id], fromJS(authUser).delete('jwt'));
    }
    case USER_LOGIN_FAIL: {
      const result = state
        .set('done', true)
        .set('error', true)
        .set('msg', action.error.message);
      if (action.isOnlyValid) return result;

      return result.set('authUserId', '');
    }

    default:
      return state;
  }
}

export default appRouterReducer;
