import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Customer = {
  firstName: string;
  lastName: string;
  region: number;
  isActive: boolean;
  id?: number;
};

interface CustomersReducerState {
  customers?: Customer[];
  isLoadingSyncCustomers: boolean;
  errorSyncCustomers: string | null;
  isLoadingResetCustomers: boolean;
  errorResetCustomers: string | null;
  isRequestedSaveCustomer: boolean;
  isLoadingSaveCustomer: boolean;
  errorSaveCustomer: string | null;
  isRequestedDeleteCustomer: boolean;
  isLoadingDeleteCustomer: boolean;
  errorDeleteCustomer: string | null;
}

const slice = createSlice({
  name: "customersReducer",
  initialState: {
    isLoadingSyncCustomers: false,
    errorSyncCustomers: null,
    isLoadingResetCustomers: false,
    errorResetCustomers: null,
    isRequestedSaveCustomer: false,
    isLoadingSaveCustomer: false,
    errorSaveCustomer: null,
    isRequestedDeleteCustomer: false,
    isLoadingDeleteCustomer: false,
    errorDeleteCustomer: null,
  } satisfies CustomersReducerState as CustomersReducerState,
  reducers: {
    syncCustomers: (state) => {
      state.isLoadingSyncCustomers = true;
      state.errorSyncCustomers = null;
    },
    syncCustomersResult: (state, action: PayloadAction<Customer[]>) => {
      state.isLoadingSyncCustomers = false;
      state.customers = action.payload;
    },
    syncCustomersError: (state, action: PayloadAction<string>) => {
      state.isLoadingSyncCustomers = false;
      state.errorSyncCustomers = action.payload;
    },
    resetCustomers: (state) => {
      state.isLoadingResetCustomers = true;
      state.errorResetCustomers = null;
    },
    resetCustomersResult: (state) => {
      state.isLoadingResetCustomers = false;
      state.customers = undefined;
    },
    resetCustomersError: (state, action: PayloadAction<string>) => {
      state.isLoadingResetCustomers = false;
      state.errorResetCustomers = action.payload;
    },
    saveCustomer: (state, action: PayloadAction<Customer>) => {
      state.isRequestedSaveCustomer = true;
      state.isLoadingSaveCustomer = true;
      state.errorSaveCustomer = null;
    },
    saveCustomerResult: (state, action: PayloadAction<Customer[]>) => {
      state.isLoadingSaveCustomer = false;
      state.customers = action.payload;
    },
    saveCustomerError: (state, action: PayloadAction<string>) => {
      state.isRequestedSaveCustomer = false;
      state.isLoadingSaveCustomer = false;
      state.errorSaveCustomer = action.payload;
    },
    saveCustomerResetRequest: (state) => {
      state.isRequestedSaveCustomer = false;
    },
    deleteCustomer: (state, action: PayloadAction<number>) => {
      state.isRequestedDeleteCustomer = true;
      state.isLoadingDeleteCustomer = true;
      state.errorDeleteCustomer = null;
    },
    deleteCustomerResult: (state, action: PayloadAction<Customer[]>) => {
      state.isLoadingDeleteCustomer = false;
      state.customers = action.payload;
    },
    deleteCustomerError: (state, action: PayloadAction<string>) => {
      state.isRequestedDeleteCustomer = false;
      state.isLoadingDeleteCustomer = false;
      state.errorDeleteCustomer = action.payload;
    },
    deleteCustomerResetRequest: (state) => {
      state.isRequestedDeleteCustomer = false;
    },
  },
});

export const {
  syncCustomers,
  syncCustomersResult,
  syncCustomersError,
  resetCustomers,
  resetCustomersResult,
  resetCustomersError,
  saveCustomer,
  saveCustomerResult,
  saveCustomerError,
  saveCustomerResetRequest,
  deleteCustomer,
  deleteCustomerResult,
  deleteCustomerError,
  deleteCustomerResetRequest,
} = slice.actions;

export default slice.reducer;
