import React from "react";
import { CustomerDataForm } from "../components/CustomerDataForm";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { ActivityIndicator, Text, View } from "react-native";
import { appStyles } from "../styles/main";

export const EditCustomer: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "EditCustomer">>();

  const customerToEdit = params?.customer;

  if (!params) {
    return (
      <View style={appStyles.loadingIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!customerToEdit) {
    return (
      <View style={appStyles.container}>
        <Text>
          We're sorry, we're having trouble finding this customer to edit.
          Please try again later.
        </Text>
      </View>
    );
  }

  return (
    <CustomerDataForm existingCustomer={customerToEdit} canDelete={true} />
  );
};
