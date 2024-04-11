import React from "react";
import { CustomerDataForm } from "../components/CustomerDataForm";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";

export const AddCustomer: React.FC = () => {
  const { addCustomer, isLoading, error } = useGetCustomersReducer();

  return (
    <CustomerDataForm
      canDelete={false}
      onSave={addCustomer}
      isDisabled={isLoading}
      error={error}
    />
  );
};
