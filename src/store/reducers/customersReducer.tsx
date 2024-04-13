import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Customer = {
  firstName: string;
  lastName: string;
  region: number;
  isActive: boolean;
  id: number;
};

interface CustomersReducerState {
  customers?: Customer[];
  isLoadingAddCustomer: boolean;
  errorAddCustomer: string | null;
  isLoadingSyncCustomers: boolean;
  errorSyncCustomers: string | null;
}

const slice = createSlice({
  name: "customersReducer",
  initialState: {
    isLoadingAddCustomer: false,
    errorAddCustomer: null,
    isLoadingSyncCustomers: false,
    errorSyncCustomers: null,
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
    addCustomer: (state, action: PayloadAction<Omit<Customer, "id">>) => {
      state.isLoadingAddCustomer = true;
      state.errorAddCustomer = null;
    },
    addCustomerResult: (state, action: PayloadAction<Customer[]>) => {
      state.isLoadingAddCustomer = false;
      state.customers = action.payload;
    },
    addCustomerError: (state, action: PayloadAction<string>) => {
      state.isLoadingAddCustomer = false;
      state.errorAddCustomer = action.payload;
    },
  },
});

export const {
  syncCustomers,
  syncCustomersResult,
  syncCustomersError,
  addCustomer,
  addCustomerResult,
  addCustomerError,
} = slice.actions;

export default slice.reducer;
