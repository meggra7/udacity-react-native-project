import { all } from "redux-saga/effects";
import { watchSaveCustomer } from "./sagas/customers/saveCustomerSaga";
import { watchSyncCustomers } from "./sagas/customers/syncCustomersSaga";
import { watchDeleteCustomer } from "./sagas/customers/deleteCustomerSaga";

export default function* rootSaga() {
  yield all([watchSyncCustomers(), watchSaveCustomer(), watchDeleteCustomer()]);
}
