import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ReactNode,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { InputProps } from './types';
import { useState } from 'react';

export const Input = ({
  value,
  onChangeText,
  placeholder,
  errorMessage,
  leftElement,
  rightElement,
  isPhone,
  isPassword,
  ...restProps
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const keyboardType = isPhone ? 'phone-pad' : restProps.keyboardType;
  const secureTextEntry = isPassword ? true : restProps.secureTextEntry;
  return (
    <View style={$container}>
      <View style={$inputContainer}>
        {leftElement && <View style={$leftElement}>{leftElement}</View>}
        <TextInput
          style={[
            $input,
            isFocused && $focusedInput,
            errorMessage && $errorInput,
            leftElement && { paddingLeft: 10 },
            rightElement && { paddingRight: 10 },
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          {...restProps}
        />
        {rightElement && <View style={$rightElement}>{rightElement}</View>}
      </View>
      {errorMessage && <Text style={$errorText}>{errorMessage}</Text>}
    </View>
  );
};

const $container = {};

const $inputContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  paddingVertical: 10,
  paddingHorizontal: 12,
};

const $input: TextStyle = {
  flex: 1,
  fontSize: 16,
  height: 64,
};

const $leftElement: ViewStyle = {
  marginRight: 8,
};

const $rightElement: ViewStyle = {
  marginLeft: 8,
};

const $focusedInput: ViewStyle = {
  borderColor: '#007bff',
};
const $errorInput: ViewStyle = {
  borderColor: '#dc3545',
};

const $errorText: TextStyle = {
  color: '#dc3545',
  fontSize: 12,
  marginTop: 5,
};
