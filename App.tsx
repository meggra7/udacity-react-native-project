import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "./src/screens/Welcome";
import { RegionList } from "./src/screens/RegionList";
import { CustomerList } from "./src/screens/CustomerList";
import { ViewCustomer } from "./src/screens/ViewCustomer";
import { EditCustomer } from "./src/screens/EditCustomer";
import { AddCustomer } from "./src/screens/AddCustomer";
import { Screen } from "./src/constants";
import { Customer } from "./src/store/reducers/customersReducer";
import { RootSiblingParent } from "react-native-root-siblings";

// Per documentation https://reactnavigation.org/docs/typescript/#type-checking-the-navigator
export type RootStackParamList = {
  Welcome: undefined;
  RegionList: undefined;
  CustomerList: { regionId: number };
  ViewCustomer: { customerId: number };
  EditCustomer: { customer: Customer };
  AddCustomer: { regionId: number };
};

// Per documentation https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <RootSiblingParent>
          <NavigationContainer>
            <RootStack.Navigator initialRouteName={Screen.Welcome}>
              <RootStack.Screen
                name={Screen.Welcome}
                component={Welcome}
                options={{ title: "Welcome" }}
              />
              <RootStack.Screen
                name={Screen.RegionList}
                component={RegionList}
                options={{ title: "Regions" }}
              />
              <RootStack.Screen
                name={Screen.CustomerList}
                component={CustomerList}
                options={{ title: "Customers" }}
              />
              <RootStack.Screen
                name={Screen.ViewCustomer}
                component={ViewCustomer}
                options={{ title: "View Customer" }}
              />
              <RootStack.Screen
                name={Screen.EditCustomer}
                component={EditCustomer}
                options={{ title: "Edit Customer" }}
              />
              <RootStack.Screen
                name={Screen.AddCustomer}
                component={AddCustomer}
                options={{ title: "Add Customer" }}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </RootSiblingParent>
      </ApplicationProvider>
    </Provider>
  );
}
