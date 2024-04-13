import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton, DangerousButton } from "../components/buttons";
import { Screen } from "../constants";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";

export const Welcome: React.FC = () => {
  const { navigate } = useNavigation();
  const { customers, syncCustomers } = useGetCustomersReducer();

  useEffect(() => {
    if (!customers) {
      syncCustomers();
    }
  }, []);

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

      <DangerousButton
        text="Clear all customer data"
        onPress={() => console.log("Clearing all customer data")}
      />
    </View>
  );
};
