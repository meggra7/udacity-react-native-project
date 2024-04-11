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

      const newCustomer: Omit<Customer, "id"> = action.payload;

      const lastAddedCustomerId = state.customers?.at(-1)?.id ?? 0;
      const newCustomerId = lastAddedCustomerId + 1;

      const customerToBeAdded = {
        ...newCustomer,
        id: newCustomerId,
      };

      state.customers = [...(state.customers || []), customerToBeAdded];
    },
    addCustomerResult: (state) => {
      state.isLoading = false;
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
