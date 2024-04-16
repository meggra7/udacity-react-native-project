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
  dropdownInput: {
    fontFamily: "inherit",
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
  canDelete: boolean;
  isDisabled: boolean;
  onSave: (customer: Customer) => void;
  error: string | null;
}

export const CustomerDataForm: React.FC<CustomerDataFormProps> = ({
  existingCustomer,
  canDelete,
  isDisabled,
  onSave,
  error,
}) => {
  const { deleteCustomer, isLoadingDeleteCustomer, errorDeleteCustomer } =
    useGetCustomersReducer();
  const { regions } = useGetRegions();
  const [firstName, setFirstName] = React.useState(
    existingCustomer?.firstName ?? ""
  );
  const [lastName, setLastName] = React.useState(
    existingCustomer?.lastName ?? ""
  );
  const [region, setRegion] = React.useState(existingCustomer?.region ?? 0);
  const [isActive, setIsActive] = React.useState(
    existingCustomer?.isActive ?? true
  );
  const [dropdownIndexPath, setDropdownIndexPath] = React.useState<IndexPath>(
    new IndexPath(region)
  );

  const disableButtons = isDisabled || isLoadingDeleteCustomer;

  useEffect(() => {
    setRegion(dropdownIndexPath.row);
  }, [dropdownIndexPath.row]);

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
        <Dropdown
          style={{
            ...styles.input,
            ...styles.dropdownInput,
          }}
        >
          <Select
            value={regions[region]}
            selectedIndex={dropdownIndexPath as IndexPath}
            onSelect={(index) => setDropdownIndexPath(index as IndexPath)}
          >
            {regions.map((region) => (
              <SelectItem title={region} />
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
            onPress={() =>
              onSave({
                firstName,
                lastName,
                region,
                isActive,
                id: existingCustomer?.id,
              })
            }
            disabled={disableButtons}
          />
          <SecondaryButton
            text="Cancel"
            onPress={() => {
              console.log("Canceling edits");
            }}
            disabled={disableButtons}
          />
        </View>
        {canDelete && (
          <DangerousButton
            text="Delete"
            onPress={() => showDeleteCustomerAlert()}
            disabled={disableButtons}
          />
        )}
      </View>
      {(error || errorDeleteCustomer) && (
        <Text style={appStyles.errorText}>
          {error ?? errorDeleteCustomer}
        </Text>
      )}
    </View>
  );
};
