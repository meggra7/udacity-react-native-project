import { StyleSheet } from "react-native";

export enum AppColor {
  Primary = "#2BACAC",
  PrimaryLight = "#ddf0f1",
  Danger = "#ac2b2b",
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
  dangerousButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    margin: 6,
    backgroundColor: "#FFFFFF",
    borderColor: AppColor.Danger,
    borderWidth: 2,
  },
  dangerousButtonText: {
    color: AppColor.Danger,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
