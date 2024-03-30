import React from "react";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";

export const ViewCustomer: React.FC = () => {
  return (
    <View style={appStyles.container}>
      <Text>View Customer Page</Text>
      <PrimaryButton
        text="Edit Customer"
        onPress={() => {
          console.log("Editing customer details");
        }}
      />
    </View>
  );
};
