import { isEmpty } from 'lodash';
import { AsyncStorage } from 'react-native';

const TOKEN_KEY = 'jwtToken';

const { parse, stringify } = JSON;

const auth = {
  /**
   * Remove an item from the used storage
   * @param  {String} key [description]
   */
  clear(key) {
    AsyncStorage.removeItem(key);
  },
  clearToken(tokenKey = TOKEN_KEY) {
    return auth.clear(tokenKey);
  },

  /**
   * Clear all app storage
   */
  clearAppStorage() {
    AsyncStorage.clear();
  },

  /**
   * Returns data from storage
   * @param  {String} key Item to get from the storage
   * @return {String|Object}     Data from the storage
   */
  async get(key) {
    const value = await AsyncStorage.getItem(key);
    try {
      return parse(value);
    } catch (e) {
      return value;
    }
  },
  getToken(tokenKey = TOKEN_KEY) {
    return auth.get(tokenKey);
  },

  /**
   * Set data in storage
   * @param {String|Object}  value    The data to store
   * @param {String}  key
   */
  set(value, key) {
    if (isEmpty(value)) {
      return null;
    }
    return AsyncStorage.setItem(key, stringify(value));
  },
  setToken(value = '', tokenKey = TOKEN_KEY) {
    return auth.set(value, tokenKey);
  },
};

export default auth;
