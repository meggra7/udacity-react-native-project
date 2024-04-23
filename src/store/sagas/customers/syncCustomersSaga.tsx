import { put, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../../reducers/customersReducer";
import { Customer } from "../../reducers/customersReducer";
import { getCustomersFromStorage } from "../../utilities/async_storage";

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
