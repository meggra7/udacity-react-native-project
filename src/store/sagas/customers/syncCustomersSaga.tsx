import { put, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../../reducers/customersReducer";
import { Customer } from "../../reducers/customersReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKey } from "../../../constants";

export function* watchSyncCustomers() {
  yield takeLatest(actions.syncCustomers.toString(), takeSyncCustomers);
}

export function* takeSyncCustomers() {
  try {
    const customers: Customer[] = yield getCustomersFromStorage();

    yield put(actions.syncCustomersResult(customers));
  } catch (error: any) {
    yield put(actions.syncCustomersResult(error.toString()));
  }
}

const getCustomersFromStorage = async () => {
  const customerData = await AsyncStorage.getItem(AsyncStorageKey.Customer);
  return customerData ? JSON.parse(customerData) : [];
};
