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
  isLoading: boolean;
  error: string | null;
}

const slice = createSlice({
  name: "customersReducer",
  initialState: {
    isLoading: false,
    error: null,
  } satisfies CustomersReducerState as CustomersReducerState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Omit<Customer, "id">>) => {
      state.isLoading = true;
      state.error = null;
    },
    addCustomerResult: (state, action: PayloadAction<Customer[]>) => {
      state.isLoading = false;
      state.customers = action.payload;
    },
    addCustomerError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addCustomer, addCustomerResult, addCustomerError } =
  slice.actions;

export default slice.reducer;
