import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";
import { Screen } from "../constants";

export const RegionList: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={appStyles.container}>
      <Text>Region List Page</Text>
      <PrimaryButton
        text="Eastern"
        onPress={() => navigate(Screen.CustomerList)}
      />
      <PrimaryButton
        text="Central"
        onPress={() => navigate(Screen.CustomerList)}
      />
      <PrimaryButton
        text="Mountain"
        onPress={() => navigate(Screen.CustomerList)}
      />
      <PrimaryButton
        text="Pacific"
        onPress={() => navigate(Screen.CustomerList)}
      />
    </View>
  );
};
