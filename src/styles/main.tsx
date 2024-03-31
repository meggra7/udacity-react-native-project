import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    margin: 6,
    backgroundColor: "#AC2B2B",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    margin: 6,
    backgroundColor: "#FFFFFF",
    borderColor: "#AC2B2B",
    borderWidth: 2,
  },
  secondaryButtonText: {
    color: "#AC2B2B",
    textTransform: "uppercase",
  },
});
