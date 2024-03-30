import React from "react";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";

export const CustomerList: React.FC = () => {
  return (
    <View style={appStyles.container}>
      <Text>Customer List Page</Text>
      <PrimaryButton
        text="View Customer"
        onPress={() => {
          console.log("Viewing customer details");
        }}
      />
    </View>
  );
};
