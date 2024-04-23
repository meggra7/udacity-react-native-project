import AsyncStorage from "@react-native-async-storage/async-storage";
import { Customer } from "../reducers/customersReducer";

export enum AsyncStorageKey {
  Customer = "CUSTOMER",
}

export const getCustomersFromStorage = async () => {
  const customerData = await AsyncStorage.getItem(AsyncStorageKey.Customer);
  return customerData ? JSON.parse(customerData) : [];
};

export const setCustomersToStorage = async (customers: Customer[]) => {
  const serializedCustomers = JSON.stringify(customers);
  return await AsyncStorage.setItem(
    AsyncStorageKey.Customer,
    serializedCustomers
  );
};
