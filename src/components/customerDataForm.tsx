import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
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
  existingFirstName?: string;
  existingLastName?: string;
  existingRegion?: number;
  existingIsActive?: boolean;
  canDelete: boolean;
  isDisabled: boolean;
  // TODO add option with Customer without id omission once edit customer implemented
  onSave: (customer: Omit<Customer, "id">) => void;
  error: string | null;
}

export const CustomerDataForm: React.FC<CustomerDataFormProps> = ({
  existingFirstName,
  existingLastName,
  existingRegion,
  existingIsActive,
  canDelete,
  isDisabled,
  onSave,
  error,
}) => {
  const [firstName, setFirstName] = React.useState(existingFirstName ?? "");
  const [lastName, setLastName] = React.useState(existingLastName ?? "");
  const [region, setRegion] = React.useState(existingRegion ?? 0);
  const [isActive, setIsActive] = React.useState(existingIsActive ?? true);
  const [dropdownIndexPath, setDropdownIndexPath] = React.useState<IndexPath>(
    new IndexPath(region)
  );
  const { regions } = useGetRegions();
  const {} = useGetCustomersReducer();
  // TODO pull id from Redux once edit customer implemented
  const customer = { firstName, lastName, region, isActive };

  useEffect(() => {
    setRegion(dropdownIndexPath.row);
  }, [dropdownIndexPath.row]);

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
            onPress={() => onSave(customer)}
            disabled={isDisabled}
          />
          <SecondaryButton
            text="Cancel"
            onPress={() => {
              console.log("Canceling edits");
            }}
            disabled={isDisabled}
          />
        </View>
        {canDelete && (
          <DangerousButton
            text="Delete"
            onPress={() => {
              console.log("Deleting customer");
            }}
            disabled={isDisabled}
          />
        )}
      </View>
      {error && <Text style={{ color: AppColor.Danger }}>{error}</Text>}
    </View>
  );
};
