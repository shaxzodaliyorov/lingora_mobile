import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // <-- update import


interface SocialButtonProps {
    label?: string;
    onPress?: () => void;
    outlined?: boolean;
    disabled?: boolean;
}


const SocialButton: React.FC<SocialButtonProps> = ({
  label = 'Sign Up with Facebook',
  onPress = () => {},
  outlined = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outlined && styles.outlined,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <View style={styles.iconLabel}>
        <Text style={{fontSize: 20, marginRight: 8}}>🌐</Text>
        <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SocialButton;


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7F2F5F',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 28,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#95507A',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#b98bb3',
  },
  disabled: {
    backgroundColor: '#6d3c5c',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  label: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 600,
    fontFamily: 'SF Pro',
    fontStyle: 'normal',
    lineHeight: 22,
    textAlign: 'center',
  },
  labelDisabled: {
    color: '#b98bb3',
  },
});