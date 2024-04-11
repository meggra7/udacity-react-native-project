import { all } from "redux-saga/effects";
import { watchAddCustomer } from "./sagas/customers/addCustomerSaga";
import { watchSyncCustomers } from "./sagas/customers/syncCustomersSaga";

export default function* rootSaga() {
  yield all([watchAddCustomer(), watchSyncCustomers()]);
}
