import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import * as actions from "../reducers/customersReducer";
import { Customer } from "../reducers/customersReducer";

export const useGetCustomersReducer = () => {
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.customersReducer.customers
  );
  const isLoadingAddCustomer = useSelector(
    (state: RootState) => state.customersReducer.isLoadingAddCustomer
  );
  const errorAddCustomer = useSelector(
    (state: RootState) => state.customersReducer.errorAddCustomer
  );
  const isLoadingSyncCustomers = useSelector(
    (state: RootState) => state.customersReducer.isLoadingSyncCustomers
  );
  const errorSyncCustomers = useSelector(
    (state: RootState) => state.customersReducer.errorSyncCustomers
  );

  return {
    customers,
    isLoadingAddCustomer,
    errorAddCustomer,
    addCustomer: (customer: Omit<Customer, "id">) => {
      return dispatch(actions.addCustomer(customer));
    },
    isLoadingSyncCustomers,
    errorSyncCustomers,
    syncCustomers: () => {
      return dispatch(actions.syncCustomers());
    },
  };
};
