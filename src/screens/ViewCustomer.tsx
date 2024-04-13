import React from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AppColor, appStyles } from "../styles/main";
import { Screen } from "../constants";
import { RootStackParamList } from "../../App";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";
import { useGetRegions } from "../store/hooks/useGetRegions";

export const ViewCustomer: React.FC = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "ViewCustomer">>();
  const { regions } = useGetRegions();
  const { customers } = useGetCustomersReducer();

  const selectedCustomerId = params.customerId;
  const selectedCustomer = customers?.find(
    (customer) => customer.id === selectedCustomerId
  );

  if (!regions || !customers) {
    return (
      <View style={appStyles.loadingIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!selectedCustomer) {
    return (
      <View style={appStyles.container}>
        <Text>We're sorry, the selected customer cannot be found.</Text>
      </View>
    );
  }

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
        {selectedCustomer.isActive ? (
          <Fontisto name="smiley" size={48} color="green" />
        ) : (
          <Fontisto name="frowning" size={48} color="grey" />
        )}
        <Text
          style={{
            textTransform: "uppercase",
            color: selectedCustomer.isActive ? "green" : "grey",
          }}
        >
          {selectedCustomer.isActive ? "Active" : "Inactive"}
        </Text>
      </View>

      <View style={viewCustomerStyles.section}>
        <Text style={{ fontSize: 32 }}>
          {selectedCustomer.firstName} {selectedCustomer.lastName}
        </Text>
        <Text style={{ fontSize: 22 }}>
          {regions[selectedCustomer.region]} Region
        </Text>
      </View>

      <View style={viewCustomerStyles.section}>
        <Pressable
          style={viewCustomerStyles.actionContainer}
          onPress={() =>
            navigate(Screen.EditCustomer, { customer: selectedCustomer })
          }
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
