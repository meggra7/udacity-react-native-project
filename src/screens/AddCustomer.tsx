import React from "react";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";

export const AddCustomer: React.FC = () => {
  return (
    <View style={appStyles.container}>
      <Text>Add Customer Page</Text>
      <PrimaryButton
        text="Save"
        onPress={() => {
          console.log("Saving new customer");
        }}
      />
      <PrimaryButton
        text="Cancel"
        onPress={() => {
          console.log("Canceling add");
        }}
      />
    </View>
  );
};
