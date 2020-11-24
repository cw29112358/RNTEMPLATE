import * as commonColor from 'commonColor';

import variables from 'platform';

const {
  deviceWidth,
  deviceHeight,
} = variables;

export default {
  spinnerBox: {
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonColor.faintBlack,
  },
  spinner: {
    height: 60,
  },
  childrenStyle: {
    backgroundColor: 'transparent',
  },
  spinnerColor: {
    color: commonColor.brand,
  },
  text: {
    marginLeft: 10,
    color: commonColor.grey650,
  },
};
