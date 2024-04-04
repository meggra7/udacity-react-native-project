import React from "react";
import { CustomerDataForm } from "../components/customerDataForm";

export const AddCustomer: React.FC = () => {
  return <CustomerDataForm canDelete={false} />;
};
