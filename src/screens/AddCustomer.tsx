import React from "react";
import { CustomerDataForm } from "../components/CustomerDataForm";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";

export const AddCustomer: React.FC = () => {
  const { saveCustomer, isLoadingSaveCustomer, errorSaveCustomer } =
    useGetCustomersReducer();

  return (
    <CustomerDataForm
      canDelete={false}
      onSave={saveCustomer}
      isDisabled={isLoadingSaveCustomer}
      error={errorSaveCustomer}
    />
  );
};
