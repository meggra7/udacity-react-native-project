import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import * as actions from "../reducers/customersReducer";
import { Customer } from "../reducers/customersReducer";

export const useGetCustomersReducer = () => {
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.customersReducer.customers
  );
  const isLoadingSyncCustomers = useSelector(
    (state: RootState) => state.customersReducer.isLoadingSyncCustomers
  );
  const errorSyncCustomers = useSelector(
    (state: RootState) => state.customersReducer.errorSyncCustomers
  );
  const isLoadingSaveCustomer = useSelector(
    (state: RootState) => state.customersReducer.isLoadingSaveCustomer
  );
  const errorSaveCustomer = useSelector(
    (state: RootState) => state.customersReducer.errorSaveCustomer
  );

  return {
    customers,
    isLoadingSyncCustomers,
    errorSyncCustomers,
    syncCustomers: () => {
      return dispatch(actions.syncCustomers());
    },
    isLoadingSaveCustomer,
    errorSaveCustomer,
    saveCustomer: (customer: Customer) => {
      return dispatch(actions.saveCustomer(customer));
    },
  };
};
