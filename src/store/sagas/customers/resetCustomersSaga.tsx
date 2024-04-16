import { put, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../../reducers/customersReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* watchResetCustomers() {
  yield takeLatest(actions.resetCustomers.toString(), takeResetCustomers);
}

export function* takeResetCustomers() {
  try {
    yield AsyncStorage.clear();
    yield put(actions.resetCustomersResult());
    yield put(actions.syncCustomers());
  } catch (error: any) {
    yield put(actions.resetCustomersError(error.toString()));
  }
}
