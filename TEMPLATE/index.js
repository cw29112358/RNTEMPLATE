/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount has been renamed, and is not recommended for use',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use',
  'Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from \'@react-native-community/async-storage\' instead of \'react-native\'',
]);
AppRegistry.registerComponent(appName, () => App);
