import React from "react";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";

export const EditCustomer: React.FC = () => {
  return (
    <View style={appStyles.container}>
      <Text>Edit Customer Page</Text>
      <PrimaryButton
        text="Save"
        onPress={() => {
          console.log("Saving customer details");
        }}
      />
      <PrimaryButton
        text="Cancel"
        onPress={() => {
          console.log("Canceling edits");
        }}
      />
    </View>
  );
};
