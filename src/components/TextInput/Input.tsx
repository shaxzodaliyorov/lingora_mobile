import { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Props } from './type';

const CustomTextInput = ({
  children,
  value="",
  secure = false,
  setValue,
  isError = false,
}: Props) => {
  const [shadow, setShadow] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.focusBorder , shadow && {borderColor: '#ffffffa0'}, isError && shadow && {borderColor: '#FF6666'}]}>
        <View style={[styles.inputContainer , isError && styles.errorBorder ]}>
          <View style={styles.iconCircle}></View>
          <TextInput
            style={styles.textInput}
            placeholder="Placeholder"
            placeholderTextColor="#d2a9c7"
            value={value}
            onChangeText={setValue}
            secureTextEntry={secure}
            cursorColor={'#FEF8AD'}
            onFocus={() => setShadow(true)}
            onBlur={() => setShadow(false)}
          />
          <View style={styles.iconCircle}></View>
        </View>
      </View>

      <Text style={styles.helperText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000040',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#8b3c74',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  errorBorder: {
    borderColor: '#FF6666',
  },
  focusBorder: {
    borderWidth: 4,
    borderColor: '#671849',
    borderRadius: 40,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
    marginHorizontal: 4,
  },
  textInput: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  helperText: {
    marginTop: 6,
    marginLeft: 4,
    color: '#d2a9c7',
    fontSize: 14,
  },
});

export default CustomTextInput;
