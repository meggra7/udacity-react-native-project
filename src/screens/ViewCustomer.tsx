import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  ActivityIndicator,
  Alert,
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
import * as Notifications from "expo-notifications";
import Toast from "react-native-root-toast";

const requestNotificationsPermissions = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    Toast.show(
      "Notifications permissions NOT granted. Communication reminders will not be sent.",
      {
        duration: Toast.durations.LONG,
      }
    );
  }
};

const handleNotification = () => {
  console.warn(
    "Your notification ran, but the app was still active so the notification did not show."
  );
};

const setCommunicationReminder = (customerName: string) => {
  const options = {
    content: {
      title: "Communication reminder",
      body: `This is your reminder to contact ${customerName}.`,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue",
    },
    trigger: {
      seconds: 5,
    },
  };

  Alert.alert(
    `Communication reminder for ${customerName}`,
    "This is a local notification which requires the app NOT to be active to be triggered.\n\nWhen you're ready, tap the option to set the reminder. You'll have 5 seconds to press the home button and hide the app before the notification is sent.",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Set reminder",
        onPress: () => Notifications.scheduleNotificationAsync(options),
      },
    ]
  );
};

export const ViewCustomer: React.FC = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "ViewCustomer">>();
  const { regions } = useGetRegions();
  const { customers } = useGetCustomersReducer();

  const selectedCustomerId = params.customerId;
  const selectedCustomer = customers?.find(
    (customer) => customer.id === selectedCustomerId
  );

  requestNotificationsPermissions();

  if (!params || !regions || !customers) {
    return (
      <View style={appStyles.loadingIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!selectedCustomer) {
    return (
      <View style={appStyles.container}>
        <Text>
          We're sorry, we're having trouble finding this customer. Please try
          again later.
        </Text>
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

  useEffect(() => {
    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

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
          onPress={() =>
            setCommunicationReminder(
              `${selectedCustomer.firstName} ${selectedCustomer.lastName}`
            )
          }
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
