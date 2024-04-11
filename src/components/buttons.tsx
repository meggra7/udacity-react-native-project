import React from "react";
import { Pressable, Text } from "react-native";
import { appStyles } from "../styles/main";

interface ButtonProps {
  text: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  onLongPress,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        ...appStyles.primaryButton,
        ...(disabled ? appStyles.primaryButtonDisabled : {}),
      }}
      disabled={disabled}
    >
      <Text style={appStyles.primaryButtonText}>{text}</Text>
    </Pressable>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  onLongPress,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        ...appStyles.secondaryButton,
        ...(disabled ? appStyles.secondaryButtonDisabled : {}),
      }}
      disabled={disabled}
    >
      <Text
        style={{
          ...appStyles.secondaryButtonText,
          ...(disabled ? appStyles.secondaryButtonTextDisabled : {}),
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export const DangerousButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  onLongPress,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        ...appStyles.dangerousButton,
        ...(disabled ? appStyles.dangerousButtonDisabled : {}),
      }}
      disabled={disabled}
    >
      <Text
        style={{
          ...appStyles.dangerousButtonText,
          ...(disabled ? appStyles.dangerousButtonTextDisabled : {}),
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};
