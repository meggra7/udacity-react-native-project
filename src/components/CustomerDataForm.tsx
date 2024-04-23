import React, { useEffect } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { AppColor, appStyles } from "../styles/main";
import { PrimaryButton, SecondaryButton, DangerousButton } from "./buttons";
import {
  IndexPath,
  Layout as Dropdown,
  Select,
  SelectItem,
  Toggle,
} from "@ui-kitten/components";
import { useGetRegions } from "../store/hooks/useGetRegions";
import { Customer } from "../store/reducers/customersReducer";
import { useGetCustomersReducer } from "../store/hooks/useGetCustomersReducer";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../constants";

const styles = StyleSheet.create({
  container: {
    ...appStyles.container,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 48,
    gap: 32,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inputLabel: {
    width: "40%",
  },
  input: {
    width: "60%",
    height: 40,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 5,
    padding: 10,
  },
  toggleInput: {
    justifyContent: "flex-end",
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

interface CustomerDataFormProps {
  existingCustomer?: Customer;
  regionIdForNewCustomer?: number;
  canDelete: boolean;
}

export const CustomerDataForm: React.FC<CustomerDataFormProps> = ({
  existingCustomer,
  regionIdForNewCustomer,
  canDelete,
}) => {
  const { navigate, goBack } = useNavigation();
  const {
    saveCustomer,
    isRequestedSaveCustomer,
    isLoadingSaveCustomer,
    errorSaveCustomer,
    resetRequestSaveCustomer,
    deleteCustomer,
    isRequestedDeleteCustomer,
    isLoadingDeleteCustomer,
    errorDeleteCustomer,
    resetRequestDeleteCustomer,
  } = useGetCustomersReducer();
  const { regions } = useGetRegions();
  const [firstName, setFirstName] = React.useState(
    existingCustomer?.firstName ?? ""
  );
  const [lastName, setLastName] = React.useState(
    existingCustomer?.lastName ?? ""
  );
  const [region, setRegion] = React.useState(
    existingCustomer?.region ?? regionIdForNewCustomer ?? 0
  );
  const [isActive, setIsActive] = React.useState(
    existingCustomer?.isActive ?? true
  );
  const [dropdownIndexPath, setDropdownIndexPath] = React.useState<IndexPath>(
    new IndexPath(region)
  );

  const disableButtons = isLoadingSaveCustomer || isLoadingDeleteCustomer;

  const customerToSave: Customer = {
    firstName,
    lastName,
    region,
    isActive,
    id: existingCustomer?.id,
  };

  useEffect(() => {
    setRegion(dropdownIndexPath.row);
  }, [dropdownIndexPath.row]);

  useEffect(() => {
    if (
      isRequestedSaveCustomer &&
      !isLoadingSaveCustomer &&
      !errorSaveCustomer
    ) {
      // The requested save was successful. Clear the save request and go back to the customer list.
      resetRequestSaveCustomer();
      navigate(Screen.CustomerList, { regionId: customerToSave.region });
    }
  }, [isRequestedSaveCustomer, isLoadingSaveCustomer, errorSaveCustomer]);

  useEffect(() => {
    if (
      isRequestedDeleteCustomer &&
      !isLoadingDeleteCustomer &&
      !errorDeleteCustomer
    ) {
      // The requested deletion was successful. Clear the deletion request and go back to the customer list.
      resetRequestDeleteCustomer();

      existingCustomer
        ? navigate(Screen.CustomerList, {
            regionId: existingCustomer.region,
          })
        : navigate(Screen.RegionList);
    }
  }, [isRequestedDeleteCustomer, isLoadingDeleteCustomer, errorDeleteCustomer]);

  const showDeleteCustomerAlert = () => {
    Alert.alert(
      "Deleting Customer",
      "Are you sure you want to delete this customer? This cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes, delete customer",
          onPress: () => deleteCustomer(existingCustomer?.id ?? -1),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First name:</Text>
        <TextInput
          style={{
            ...styles.input,
            ...styles.textInput,
          }}
          onChangeText={setFirstName}
          value={firstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last name:</Text>
        <TextInput
          style={{
            ...styles.input,
            ...styles.textInput,
          }}
          onChangeText={setLastName}
          value={lastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Region:</Text>
        <Dropdown style={styles.input}>
          <Select
            value={regions[region]}
            selectedIndex={dropdownIndexPath as IndexPath}
            onSelect={(index) => setDropdownIndexPath(index as IndexPath)}
          >
            {regions.map((region, index) => (
              <SelectItem title={region} key={`region-${index}`} />
            ))}
          </Select>
        </Dropdown>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Is active customer:</Text>
        <Toggle
          style={{
            ...styles.input,
            ...styles.toggleInput,
          }}
          checked={isActive}
          onChange={(isToggledOn) => setIsActive(isToggledOn)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <PrimaryButton
            text="Save"
            onPress={() => saveCustomer(customerToSave)}
            disabled={disableButtons}
          />
          <SecondaryButton
            text="Cancel"
            onPress={goBack}
            disabled={disableButtons}
          />
        </View>
        {canDelete && (
          <DangerousButton
            text="Delete"
            onPress={showDeleteCustomerAlert}
            disabled={disableButtons}
          />
        )}
      </View>
      {(errorSaveCustomer || errorDeleteCustomer) && (
        <Text style={appStyles.errorText}>
          {errorSaveCustomer ?? errorDeleteCustomer}
        </Text>
      )}
    </View>
  );
};
