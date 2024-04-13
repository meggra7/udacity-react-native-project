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
  isLoadingSaveCustomer: boolean;
  errorSaveCustomer: string | null;
  isLoadingDeleteCustomer: boolean;
  errorDeleteCustomer: string | null;
}

const slice = createSlice({
  name: "customersReducer",
  initialState: {
    isLoadingSyncCustomers: false,
    errorSyncCustomers: null,
    isLoadingSaveCustomer: false,
    errorSaveCustomer: null,
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
    saveCustomer: (state, action: PayloadAction<Customer>) => {
      state.isLoadingSaveCustomer = true;
      state.errorSaveCustomer = null;
    },
    saveCustomerResult: (state, action: PayloadAction<Customer[]>) => {
      state.isLoadingSaveCustomer = false;
      state.customers = action.payload;
    },
    saveCustomerError: (state, action: PayloadAction<string>) => {
      state.isLoadingSaveCustomer = false;
      state.errorSaveCustomer = action.payload;
    },
    deleteCustomer: (state, action: PayloadAction<number>) => {
      state.isLoadingDeleteCustomer = true;
      state.errorDeleteCustomer = null;
    },
    deleteCustomerResult: (state, action: PayloadAction<Customer[]>) => {
      state.isLoadingDeleteCustomer = false;
      state.customers = action.payload;
    },
    deleteCustomerError: (state, action: PayloadAction<string>) => {
      state.isLoadingDeleteCustomer = false;
      state.errorDeleteCustomer = action.payload;
    },
  },
});

export const {
  syncCustomers,
  syncCustomersResult,
  syncCustomersError,
  saveCustomer,
  saveCustomerResult,
  saveCustomerError,
  deleteCustomer,
  deleteCustomerResult,
  deleteCustomerError,
} = slice.actions;

export default slice.reducer;
