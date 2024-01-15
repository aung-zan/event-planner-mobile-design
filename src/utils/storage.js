import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key="", value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("error in setting item:" + error);
  }
};

export const getItem = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    console.log("error in getting item:" + error);
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("error in removing item:" + error);
  }
};
