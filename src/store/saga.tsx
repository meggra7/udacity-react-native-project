import { all } from "redux-saga/effects";
import { watchSaveCustomer } from "./sagas/customers/addCustomerSaga";
import { watchSyncCustomers } from "./sagas/customers/syncCustomersSaga";

export default function* rootSaga() {
  yield all([watchSaveCustomer(), watchSyncCustomers()]);
}
