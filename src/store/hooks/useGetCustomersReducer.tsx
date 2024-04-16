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
  const isLoadingResetCustomers = useSelector(
    (state: RootState) => state.customersReducer.isLoadingResetCustomers
  );
  const errorResetCustomers = useSelector(
    (state: RootState) => state.customersReducer.errorResetCustomers
  );
  const isLoadingSaveCustomer = useSelector(
    (state: RootState) => state.customersReducer.isLoadingSaveCustomer
  );
  const errorSaveCustomer = useSelector(
    (state: RootState) => state.customersReducer.errorSaveCustomer
  );
  const isLoadingDeleteCustomer = useSelector(
    (state: RootState) => state.customersReducer.isLoadingDeleteCustomer
  );
  const errorDeleteCustomer = useSelector(
    (state: RootState) => state.customersReducer.errorDeleteCustomer
  );

  return {
    customers,
    isLoadingSyncCustomers,
    errorSyncCustomers,
    syncCustomers: () => {
      return dispatch(actions.syncCustomers());
    },
    isLoadingResetCustomers,
    errorResetCustomers,
    resetCustomers: () => {
      return dispatch(actions.resetCustomers());
    },
    isLoadingSaveCustomer,
    errorSaveCustomer,
    saveCustomer: (customer: Customer) => {
      return dispatch(actions.saveCustomer(customer));
    },
    isLoadingDeleteCustomer,
    errorDeleteCustomer,
    deleteCustomer: (customerId: number) => {
      return dispatch(actions.deleteCustomer(customerId));
    },
  };
};
