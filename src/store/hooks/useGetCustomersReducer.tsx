import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import * as actions from "../reducers/customersReducer";
import { Customer } from "../reducers/customersReducer";

export const useGetCustomersReducer = () => {
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.customersReducer.customers
  );

  return {
    customers,
    addCustomer: (customer: Omit<Customer, "id">) => {
      return dispatch(actions.addCustomer(customer));
    },
  };
};
