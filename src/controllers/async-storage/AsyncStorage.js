import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @description Store config plain data to device's memory
 * @param {string} key - Preference key for extracting data
 * @param {any} value - Data to be stored
 */
export const setStoringData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    throw new Error('Error: ', err);
  }
};

/**
 * @description Get data from device's memory
 * @param {string} key - Preference key for extracting data
 * @param {any} defaultValue - Value to be assigned if there is satisfied key in the store
 */
export const getStoredData = async (key = '', defaultValue = null) => {
  try {
    const storedData = await AsyncStorage.getItem(key);
    console.log('StoredData: ', storedData);
    return storedData;
  } catch (err) {
    console.log(`Got an error: ${err}, return default value`);
    return defaultValue;
  }
};
