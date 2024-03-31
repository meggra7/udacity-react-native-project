import React from "react";
import { Pressable, Text } from "react-native";
import { appStyles } from "../styles/main";

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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
      <Text style={appStyles.primaryButtonText}>
        {text}
      </Text>
    </Pressable>
  );
};
