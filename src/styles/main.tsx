import { StyleSheet } from "react-native";

export enum AppColor {
  Primary = "#AC2B2B",
  PrimaryLight = "#e79c9f",
  Accent = "#2bacac",
}

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  primaryButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    margin: 6,
    backgroundColor: AppColor.Primary,
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
    borderColor: AppColor.Primary,
    borderWidth: 2,
  },
  secondaryButtonText: {
    color: AppColor.Primary,
    textTransform: "uppercase",
  },
});
