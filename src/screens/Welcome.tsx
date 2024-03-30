import React from "react";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";

export const Welcome: React.FC = () => {

  return (
    <View style={appStyles.container}>
      <Text>Welcome Page</Text>
      <PrimaryButton
        text="Customers by region"
        onPress={() => {
          console.log("Button pressed to view customers by region!");
        }}
      />
      <PrimaryButton
        text="Add new customer"
        onPress={() => {
          console.log("Button pressed to add new customer!");
        }}
      />
    </View>
  );
};
