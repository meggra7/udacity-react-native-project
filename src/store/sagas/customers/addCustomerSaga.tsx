import { put, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../../reducers/customersReducer";

export function* watchAddCustomer() {
  yield takeLatest(actions.addCustomer.toString(), takeAddCustomer);
}

export function* takeAddCustomer() {
  try {
    // TODO replace with call to async storage
    yield delay(3000);

    yield put(actions.addCustomerResult());
  } catch {
    yield put(actions.addCustomerError("Error adding customer"));
  }
}
