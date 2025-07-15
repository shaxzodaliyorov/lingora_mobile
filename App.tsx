import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomToggle from "./src/components/TextInput/Input";

const App = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <CustomToggle value={value} setValue={(str) => setValue(str)}>
        Help Text
      </CustomToggle>
      <View style={styles.outbox}></View> 
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#671849",
  },
  outbox: {
    flex: 7,
    backgroundColor: "white",
    width: "100%",
  },
});