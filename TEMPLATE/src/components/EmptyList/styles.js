import * as commonColor from 'commonColor';
import variables from 'platform';

const {
  deviceHeight,
} = variables;

export default {
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: deviceHeight - 200,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: commonColor.grey650,
  },
};
