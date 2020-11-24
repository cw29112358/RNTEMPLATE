import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { reducer as formReducer } from 'redux-form/immutable';

export default function createReducer(injectedReducers) {
  const allReducer = combineReducers({
    form: formReducer,
    ...injectedReducers,
  });

  return (state = fromJS({}), action) => {
    switch (action.type) {
      default:
        return allReducer(state, action);
    }
  };
}
