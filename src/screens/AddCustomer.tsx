import React from "react";
import { CustomerDataForm } from "../components/CustomerDataForm";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";

export const AddCustomer: React.FC = () => {
  const { addCustomer, isLoadingAddCustomer, errorAddCustomer } =
    useGetCustomersReducer();

  return (
    <CustomerDataForm
      canDelete={false}
      onSave={addCustomer}
      isDisabled={isLoadingAddCustomer}
      error={errorAddCustomer}
    />
  );
};
