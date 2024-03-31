import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";
import { Screen } from "../constants";

export const CustomerList: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={appStyles.container}>
      <Text>Customer List Page</Text>
      <PrimaryButton
        text="View Customer"
        onPress={() => navigate(Screen.ViewCustomer)}
      />
    </View>
  );
};
