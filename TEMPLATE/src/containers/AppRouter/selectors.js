import { createGetSelector } from 'reselect-immutable-helpers';
import Immutable from 'immutable';
import { createSelector } from 'reselect';

export const selectAppRouter = (state) => state.get('appRouter', Immutable.Map());

export const selectExample = createGetSelector(selectAppRouter, 'example', '');

export const selectAuthUserId = createGetSelector(selectAppRouter, 'authUserId', '');
export const selectIsLoggedIn = createSelector(selectAuthUserId, (substate) => !!substate);

export const selectLanguage = createGetSelector(selectAppRouter, 'language', 'zh');
