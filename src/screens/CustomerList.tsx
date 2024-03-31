import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";
import { Screen } from "../constants";

export const CustomerList: React.FC = () => {
  const { navigate } = useNavigation();

  const dummyCustomerData = [
    {
      lastName: "Doe",
      firstName: "Jane",
    },
    {
      lastName: "Schmoe",
      firstName: "Joe",
    },
  ];

  // TODO Dynamically determine based on number of customers once Redux implemented
  const isCustomerListEmpty = false;

  const EmptyView: React.FC = () => {
    return (
      <View>
        <Text style={{ marginBottom: 8 }}>
          No customers have been added for this region
        </Text>
        <PrimaryButton
          text="Add Customer"
          onPress={() => navigate(Screen.AddCustomer)}
        />
      </View>
    );
  };

  interface CustomerListItemProps {
    lastName: string;
    firstName: string;
  }

  const CustomerListItem: React.FC<CustomerListItemProps> = ({
    lastName,
    firstName,
  }) => {
    return (
      <Pressable
        style={{
          borderColor: "#e79c9f",
          borderWidth: 1,
          width: "100%",
          padding: 16,
          marginVertical: 4,
          justifyContent: "center",
          borderRadius: 3,
        }}
        onPress={() => {
          console.log(`Customer ${firstName} ${lastName} selected`);
          navigate(Screen.ViewCustomer);
        }}
      >
        <Text>
          {lastName}, {firstName}
        </Text>
      </Pressable>
    );
  };

  return isCustomerListEmpty ? (
    <View style={appStyles.container}>
      <EmptyView />
    </View>
  ) : (
    <View
      style={{
        ...appStyles.container,
        justifyContent: "flex-start",
      }}
    >
      <Text style={{ marginBottom: 8 }}>
        Select a customer below to view their details
      </Text>
      <ScrollView style={{ width: "100%" }}>
        {/* TODO replace with actual customer data once Redux implemented */}
        {dummyCustomerData.map((customer) => (
          <CustomerListItem
            lastName={customer.lastName}
            firstName={customer.firstName}
          />
        ))}
      </ScrollView>
    </View>
  );
};
