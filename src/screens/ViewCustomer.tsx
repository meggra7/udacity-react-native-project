import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";
import { Screen } from "../constants";

export const ViewCustomer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={appStyles.container}>
      <Text>View Customer Page</Text>
      <PrimaryButton
        text="Edit Customer"
        onPress={() => navigate(Screen.EditCustomer)}
      />
    </View>
  );
};
