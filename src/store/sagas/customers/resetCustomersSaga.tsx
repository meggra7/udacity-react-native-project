import { put, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../../reducers/customersReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKey } from "../../utilities/async_storage";

export function* watchResetCustomers() {
  yield takeLatest(actions.resetCustomers.toString(), takeResetCustomers);
}

export function* takeResetCustomers() {
  try {
    // Clear customers from async storage
    yield AsyncStorage.removeItem(AsyncStorageKey.Customer);
    yield put(actions.resetCustomersResult());
    
    // Also clear Redux by syncing customers with newly cleared async storage
    yield put(actions.syncCustomers());
  } catch (error: any) {
    yield put(actions.resetCustomersError(error.toString()));
  }
}
