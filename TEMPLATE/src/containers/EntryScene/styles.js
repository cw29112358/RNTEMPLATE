import * as commonColor from 'commonColor';
import variables from 'platform';
import { getScaleSize } from 'utils/helpers';

const {
  deviceHeight,
  deviceWidth,
  statusbarHeight,
} = variables;

export default {
  backgroundImage: {
    flex: 1,
  },
  logo: {
    width: getScaleSize(180),
    height: getScaleSize(180),
  },
  logoTitle: {
    width: getScaleSize(185),
    height: getScaleSize(34),
    marginTop: getScaleSize(40),
  },
  contentView: {
    display: 'flex',
    backgroundColor: commonColor.transparent,
    minHeight: deviceHeight - statusbarHeight,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // button
  buttonGroup: {
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  button: {
    alignSelf: 'center',
    width: deviceWidth - 75,
    justifyContent: 'space-evenly',
    borderRadius: 50,
    height: getScaleSize(44),
    elevation: 0,
  },
  logInButton: {
    backgroundColor: commonColor.white,
    marginBottom: 24,
  },
  logInText: {
    fontSize: getScaleSize(20),
    color: '#32D2D5',
  },
  signButton: {
    backgroundColor: commonColor.lighterWhite,
  },
  signUpText: {
    fontSize: getScaleSize(20),
  },
  lookButton: {
    position: 'absolute',
    top: 52,
    right: 16,
    justifyContent: 'center',
    borderColor: commonColor.white,
    borderWidth: 0.5,
    borderRadius: getScaleSize(15),
    paddingLeft: 0,
    paddingRight: 0,
    width: getScaleSize(100),
    height: getScaleSize(30),
    backgroundColor: 'transparent',
    elevation: 0,
  },
  lookText: {
    color: commonColor.white,
    fontSize: getScaleSize(14),
  },
};
