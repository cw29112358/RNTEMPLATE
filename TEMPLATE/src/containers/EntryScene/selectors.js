import { createGetSelector } from 'reselect-immutable-helpers';
import Immutable from 'immutable';

export const selectEntryScene = (state) => state.get('entryScene', Immutable.Map());
export const selectExample = createGetSelector(selectEntryScene, 'example', '');
export const selectIsExampleLoading = createGetSelector(selectEntryScene, 'isExampleLoading', false);
