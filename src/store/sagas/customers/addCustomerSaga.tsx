import { put, takeLatest } from "redux-saga/effects";
import * as actions from "../../reducers/customersReducer";
import { Customer } from "../../reducers/customersReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKey } from "../../../constants";

export function* watchAddCustomer() {
  yield takeLatest(actions.addCustomer.toString(), takeAddCustomer);
}

export function* takeAddCustomer(action: PayloadAction<Omit<Customer, "id">>) {
  try {
    const newCustomer = action.payload;
    const existingCustomers: Customer[] = yield getCustomersFromStorage();

    const lastAddedCustomerId = existingCustomers.at(-1)?.id ?? 0;
    const newCustomerId = lastAddedCustomerId + 1;

    const customerToBeAdded = {
      ...newCustomer,
      id: newCustomerId,
    };

    const updatedCustomers = [...existingCustomers, customerToBeAdded];

    yield setCustomersToStorage(updatedCustomers);
    yield put(actions.addCustomerResult(updatedCustomers));
  } catch (error: any) {
    yield put(actions.addCustomerError(error.toString()));
  }
}

const getCustomersFromStorage = async () => {
  const customerData = await AsyncStorage.getItem(AsyncStorageKey.Customer);
  return customerData ? JSON.parse(customerData) : [];
};

const setCustomersToStorage = async (customers: Customer[]) => {
  const serializedCustomers = JSON.stringify(customers);
  return await AsyncStorage.setItem(
    AsyncStorageKey.Customer,
    serializedCustomers
  );
};
