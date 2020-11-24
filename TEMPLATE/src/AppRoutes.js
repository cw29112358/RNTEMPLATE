/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React from 'react';
import PropTypes from 'prop-types';
import {
  Stack,
  Router,
  Scene,
} from 'react-native-router-flux';

import EntryScene from 'containers/EntryScene';

import HomeScene from 'containers/HomeScene';

export default function AppRoutes(props) {
  const { initialKey } = props;
  const prefix = 'dreamCar';
  return (
    <Router uriPrefix={prefix}>
      <Stack key="root" hideNavBar>
        <Scene key="entry" path="entry" component={EntryScene} />

        <Scene key="home" component={HomeScene} initial={initialKey === 'home'} />
      </Stack>
    </Router>
  );
}

AppRoutes.defaultProps = {
};

AppRoutes.propTypes = {
  initialKey: PropTypes.string.isRequired,
};
