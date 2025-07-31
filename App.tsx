/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet, Text, useColorScheme, View } from 'react-native';
import SocialButton from './src/componentes/Buttons/SocialButton';
import UpgradeButton from './src/componentes/Buttons/UpgradeButton';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <SocialButton onPress={() => {}} />
      <SocialButton onPress={() => {}} />
      <SocialButton outlined onPress={() => {}} />
      <SocialButton disabled />
      <Text style={{color: "white", alignSelf: "center"}}>No Align Self Center ↑↓</Text>
      <UpgradeButton/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        <Text style={{color: "white"}}>Wrapped with View   </Text>
        <UpgradeButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default App;
