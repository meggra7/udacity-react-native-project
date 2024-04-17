import React from "react";
import { CustomerDataForm } from "../components/CustomerDataForm";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

export const AddCustomer: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "AddCustomer">>();
  const { saveCustomer, isLoadingSaveCustomer, errorSaveCustomer } =
    useGetCustomersReducer();

  return (
    <CustomerDataForm
      regionIdForNewCustomer={params.regionId}
      canDelete={false}
      onSave={saveCustomer}
      isDisabled={isLoadingSaveCustomer}
      error={errorSaveCustomer}
    />
  );
};
