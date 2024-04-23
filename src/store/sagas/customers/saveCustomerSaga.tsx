import { put, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../../reducers/customersReducer";
import { Customer } from "../../reducers/customersReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getCustomersFromStorage,
  setCustomersToStorage,
} from "../../utilities/async_storage";

export function* watchSaveCustomer() {
  yield takeLatest(actions.saveCustomer.toString(), takeSaveCustomer);
}

export function* takeSaveCustomer(action: PayloadAction<Customer>) {
  try {
    const existingCustomers: Customer[] = yield getCustomersFromStorage();
    const rawCustomer = action.payload;
    const isNewCustomer = !rawCustomer.id;

    // Validate customer id
    const customerToSave: Customer = isNewCustomer
      ? {
          ...rawCustomer,
          id: getNewCustomerId(existingCustomers),
        }
      : rawCustomer;

    const updatedCustomers = isNewCustomer
      ? addCustomer(existingCustomers, customerToSave)
      : editCustomer(existingCustomers, customerToSave);

    yield setCustomersToStorage(updatedCustomers);
    yield put(actions.saveCustomerResult(updatedCustomers));
  } catch (error: any) {
    yield put(actions.saveCustomerError(error.toString()));
  }
}

const getNewCustomerId = (existingCustomers: Customer[]): number => {
  const lastAddedCustomerId = existingCustomers.at(-1)?.id ?? 0;
  return lastAddedCustomerId + 1;
};

const addCustomer = (
  existingCustomers: Customer[],
  newCustomer: Customer
): Customer[] => {
  return [...existingCustomers, newCustomer];
};

const editCustomer = (
  existingCustomers: Customer[],
  editedCustomer: Customer
): Customer[] => {
  const existingCustomerIndex = existingCustomers.findIndex(
    (existingCustomer) => existingCustomer.id === editedCustomer.id
  );

  if (existingCustomerIndex !== -1) {
    existingCustomers[existingCustomerIndex] = editedCustomer;
  }

  return existingCustomers;
};
