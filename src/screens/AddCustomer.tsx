import React from "react";
import { CustomerDataForm } from "../components/customerDataForm";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";

export const AddCustomer: React.FC = () => {
  const { addCustomer } = useGetCustomersReducer();

  return <CustomerDataForm canDelete={false} onSave={addCustomer} />;
};
