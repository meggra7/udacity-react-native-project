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
}

const slice = createSlice({
  name: "customersReducer",
  initialState: {
    isLoadingSyncCustomers: false,
    errorSyncCustomers: null,
    isLoadingSaveCustomer: false,
    errorSaveCustomer: null,
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
  },
});

export const {
  syncCustomers,
  syncCustomersResult,
  syncCustomersError,
  saveCustomer,
  saveCustomerResult,
  saveCustomerError,
} = slice.actions;

export default slice.reducer;
