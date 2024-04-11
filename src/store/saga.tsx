import { all } from "redux-saga/effects";
import { watchAddCustomer } from "./sagas/customers/addCustomerSaga";

export default function* rootSaga() {
  yield all([
    // TODO add individual sagas here
  ]);
}
