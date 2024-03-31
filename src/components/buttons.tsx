import React from "react";
import { Pressable, Text } from "react-native";
import { appStyles } from "../styles/main";

interface ButtonProps {
  text: string;
  onPress: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  onLongPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={appStyles.primaryButton}
    >
      <Text style={appStyles.primaryButtonText}>{text}</Text>
    </Pressable>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  onLongPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={appStyles.secondaryButton}
    >
      <Text style={appStyles.secondaryButtonText}>{text}</Text>
    </Pressable>
  );
};
