import React from "react";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";

export const RegionList: React.FC = () => {
  return (
    <View style={appStyles.container}>
      <Text>Region List Page</Text>
      <PrimaryButton
        text="Eastern"
        onPress={() => {
          console.log("Viewing Eastern customers");
        }}
      />
      <PrimaryButton
        text="Central"
        onPress={() => {
          console.log("Viewing Central customers");
        }}
      />
      <PrimaryButton
        text="Mountain"
        onPress={() => {
          console.log("Viewing Mountain customers");
        }}
      />
      <PrimaryButton
        text="Pacific"
        onPress={() => {
          console.log("Viewing Pacific customers");
        }}
      />
    </View>
  );
};
