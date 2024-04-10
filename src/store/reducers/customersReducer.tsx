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
}

const slice = createSlice({
  name: "customersReducer",
  initialState: {} satisfies CustomersReducerState as CustomersReducerState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Omit<Customer, "id">>) => {
      const newCustomer: Omit<Customer, "id"> = action.payload;

      const lastAddedCustomerId = state.customers?.at(-1)?.id ?? 0;
      const newCustomerId = lastAddedCustomerId + 1;

      const customerToBeAdded = {
        ...newCustomer,
        id: newCustomerId,
      };

      state.customers = [...(state.customers || []), customerToBeAdded];
    },
  },
});

export const { addCustomer } = slice.actions;

export default slice.reducer;
