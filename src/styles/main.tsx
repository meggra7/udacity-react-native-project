import { StyleSheet } from "react-native";

export enum AppColor {
  Primary = "#2BACAC",
  PrimaryLight = "#ddf0f1",
  Danger = "#ac2b2b",
  DangerLight = "#e79c9f",
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
  primaryButtonDisabled: {
    backgroundColor: AppColor.PrimaryLight,
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
  secondaryButtonDisabled: {
    borderColor: AppColor.PrimaryLight,
  },
  secondaryButtonText: {
    color: AppColor.Primary,
    textTransform: "uppercase",
  },
  secondaryButtonTextDisabled: {
    color: AppColor.PrimaryLight,
    textTransform: "uppercase",
  },
  dangerousButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    margin: 6,
    backgroundColor: "#FFFFFF",
    borderColor: AppColor.Danger,
    borderWidth: 2,
  },
  dangerousButtonDisabled: {
    borderColor: AppColor.DangerLight,
  },
  dangerousButtonText: {
    color: AppColor.Danger,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  dangerousButtonTextDisabled: {
    color: AppColor.DangerLight,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
