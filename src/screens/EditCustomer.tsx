import React from "react";
import { CustomerDataForm } from "../components/CustomerDataForm";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";

export const EditCustomer: React.FC = () => {
  // TODO replace with data from Redux once implemented
  const dummyCustomer = {
    firstName: "Jane",
    lastName: "Doe",
    region: 3, // region index, replicates using a region id
    isActive: true,
  };

  // TODO replace with function to edit customer once implemented
  const { addCustomer } = useGetCustomersReducer();

  return (
    <CustomerDataForm
      existingFirstName={dummyCustomer.firstName}
      existingLastName={dummyCustomer.lastName}
      existingRegion={dummyCustomer.region}
      existingIsActive={dummyCustomer.isActive}
      canDelete={true}
      onSave={addCustomer}
    />
  );
};
