import React from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AppColor, appStyles } from "../styles/main";
import { Screen } from "../constants";

export const ViewCustomer: React.FC = () => {
  const { navigate } = useNavigation();

  const dummyCustomer = {
    firstName: "Jane",
    lastName: "Doe",
    region: "Eastern",
    isActive: true,
  };

  const viewCustomerStyles = StyleSheet.create({
    container: {
      ...appStyles.container,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: 48,
      gap: 32,
    },
    section: {
      gap: 8,
    },
    actionContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    actionText: {
      color: AppColor.Primary,
    },
  });

  return (
    <View style={viewCustomerStyles.container}>
      <View style={viewCustomerStyles.section}>
        {dummyCustomer.isActive ? (
          <Fontisto name="smiley" size={48} color="green" />
        ) : (
          <Fontisto name="frowning" size={48} color="grey" />
        )}
        <Text
          style={{
            textTransform: "uppercase",
            color: dummyCustomer.isActive ? "green" : "grey",
          }}
        >
          {dummyCustomer.isActive ? "Active" : "Inactive"}
        </Text>
      </View>

      <View style={viewCustomerStyles.section}>
        <Text style={{ fontSize: 32 }}>
          {dummyCustomer.firstName} {dummyCustomer.lastName}
        </Text>
        <Text style={{ fontSize: 22 }}>{dummyCustomer.region} Region</Text>
      </View>

      <View style={viewCustomerStyles.section}>
        <Pressable
          style={viewCustomerStyles.actionContainer}
          onPress={() => navigate(Screen.EditCustomer)}
        >
          <Feather name="edit" size={32} color={AppColor.Primary} />
          <Text style={viewCustomerStyles.actionText}>Edit customer</Text>
        </Pressable>
        <Pressable
          style={viewCustomerStyles.actionContainer}
          onPress={() => console.log("Send local push notification")}
        >
          <Ionicons name="notifications" size={32} color={AppColor.Primary} />
          <Text style={viewCustomerStyles.actionText}>
            Set communication reminder
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
