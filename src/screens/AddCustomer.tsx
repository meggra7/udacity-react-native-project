import React from "react";
import { CustomerDataForm } from "../components/CustomerDataForm";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

export const AddCustomer: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "AddCustomer">>();

  return (
    <CustomerDataForm
      regionIdForNewCustomer={params.regionId}
      canDelete={false}
    />
  );
};
