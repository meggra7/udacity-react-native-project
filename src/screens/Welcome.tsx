import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";
import { Screen } from "../constants";

export const Welcome: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={appStyles.container}>
      <Text>Welcome Page</Text>
      <PrimaryButton
        text="Customers by region"
        onPress={() => navigate(Screen.RegionList)}
      />
      <PrimaryButton
        text="Add new customer"
        onPress={() => navigate(Screen.AddCustomer)}
      />
    </View>
  );
};
