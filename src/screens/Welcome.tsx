import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton, DangerousButton } from "../components/buttons";
import { Screen } from "../constants";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";

export const Welcome: React.FC = () => {
  const { navigate } = useNavigation();
  const {
    customers,
    syncCustomers,
    resetCustomers,
    isLoadingResetCustomers,
    errorResetCustomers,
  } = useGetCustomersReducer();

  useEffect(() => {
    if (!customers) {
      syncCustomers();
    }
  }, []);

  const showClearCustomerDataAlert = () => {
    Alert.alert(
      "Clearing All Customer Data",
      "Are you sure you want to clear ALL customer data? This cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes, clear all customer data",
          onPress: () => resetCustomers(),
        },
      ]
    );
  };

  return (
    <View
      style={{
        ...appStyles.container,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ marginBottom: 8 }}>
          Select an option below to continue
        </Text>
        <PrimaryButton
          text="View customers by region"
          onPress={() => navigate(Screen.RegionList)}
        />
        <PrimaryButton
          text="Add new customer"
          onPress={() => navigate(Screen.AddCustomer)}
        />
      </View>

      {errorResetCustomers && (
        <Text style={appStyles.errorText}>
          We're sorry, there was an error clearing the customer data. Please try
          again later.
        </Text>
      )}
      <DangerousButton
        text="Clear all customer data"
        onPress={showClearCustomerDataAlert}
        disabled={isLoadingResetCustomers}
      />
    </View>
  );
};
