import { put, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../../reducers/customersReducer";
import { Customer } from "../../reducers/customersReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getCustomersFromStorage,
  setCustomersToStorage,
} from "../../utilities/async_storage";

export function* watchDeleteCustomer() {
  yield takeLatest(actions.deleteCustomer.toString(), takeDeleteCustomer);
}

export function* takeDeleteCustomer(action: PayloadAction<number>) {
  try {
    const customers: Customer[] = yield getCustomersFromStorage();
    const customerToBeDeletedId = action.payload;

    const customerToBeDeletedIndex = customers.findIndex(
      (customer) => customer.id === customerToBeDeletedId
    );

    if (customerToBeDeletedIndex !== -1) {
      customers.splice(customerToBeDeletedIndex, 1);
    }

    yield setCustomersToStorage(customers);
    yield put(actions.deleteCustomerResult(customers));
  } catch (error: any) {
    yield put(actions.deleteCustomerError(error.toString()));
  }
}
