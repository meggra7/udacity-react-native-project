import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import * as actions from "../reducers/customersReducer";
import { Customer } from "../reducers/customersReducer";

export const useGetCustomersReducer = () => {
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.customersReducer.customers
  );
  const isLoading = useSelector(
    (state: RootState) => state.customersReducer.isLoading
  );
  const error = useSelector((state: RootState) => state.customersReducer.error);

  return {
    customers,
    isLoading,
    error,
    addCustomer: (customer: Omit<Customer, "id">) => {
      return dispatch(actions.addCustomer(customer));
    },
  };
};
