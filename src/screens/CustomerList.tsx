import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { AppColor, appStyles } from "../styles/main";
import { PrimaryButton } from "../components/buttons";
import { Screen } from "../constants";
import { RootStackParamList } from "../../App";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";

interface CustomerListItemProps {
  id: number;
  lastName: string;
  firstName: string;
}

const CustomerListItem: React.FC<CustomerListItemProps> = ({
  id,
  lastName,
  firstName,
}) => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      style={{
        borderColor: AppColor.PrimaryLight,
        borderWidth: 1,
        width: "100%",
        padding: 16,
        marginVertical: 4,
        justifyContent: "center",
        borderRadius: 3,
      }}
      onPress={() => {
        navigate(Screen.ViewCustomer, { customerId: id });
      }}
    >
      <Text>
        {lastName}, {firstName}
      </Text>
    </Pressable>
  );
};

const EmptyCustomerListView: React.FC = () => {
  const { navigate } = useNavigation();

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

export const CustomerList: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "CustomerList">>();
  const { customers } = useGetCustomersReducer();

  const regionId = params.regionId;
  const customersForRegion = customers?.filter(
    (customer) => customer.region === regionId
  );

  if (!customers) {
    return (
      <View style={appStyles.loadingIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  if (customersForRegion?.length === 0) {
    return (
      <View style={appStyles.container}>
        <EmptyCustomerListView />
      </View>
    );
  }

  return (
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
        {customersForRegion?.map((customer) => (
          <View key={`customer-${customer.id}`}>
            <CustomerListItem
              id={customer.id}
              lastName={customer.lastName}
              firstName={customer.firstName}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
