/**
 *
 * HomeScene Container
 *
 */


import React from 'react';
import { compose } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  View,
  Text,
} from 'native-base';

import FullScreenScene from 'components/FullScreenScene';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import sagas from './sagas';
import reducer from './reducer';

// import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export class HomeScene extends React.Component {
  render() {
    return (
      <FullScreenScene
        headerTitle="takeLook"
        isLoading={false}
      >
        <View>
          <Text>takeLook</Text>
        </View>
      </FullScreenScene>
    );
  }
}

HomeScene.defaultProps = {
};

HomeScene.propTypes = {
};

const mapStateToProps = createPropsSelector({
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const withReducer = injectReducer({ key: 'homeScene', reducer });

export const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  withConnect,
  ...withSagas,
)(HomeScene);
