import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";
import { Screen } from "../constants";
import { useGetRegions } from "../store/hooks/useGetRegions";

export const RegionList: React.FC = () => {
  const { navigate } = useNavigation();
  const { regions } = useGetRegions();

  return (
    <View style={appStyles.container}>
      <Text style={{ marginBottom: 8, textAlign: "center" }}>
        Select a region below to view customers for that region
      </Text>
      {regions.map((region: string, id: number) => (
        <View key={`region-${id}`}>
          <PrimaryButton
            text={region}
            onPress={() => {
              navigate(Screen.CustomerList, { regionId: id });
            }}
          />
        </View>
      ))}
    </View>
  );
};
