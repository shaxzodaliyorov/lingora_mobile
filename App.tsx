/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet, Text, useColorScheme, View } from 'react-native';
import SocialButton from './src/componentes/Buttons/SocialButton';
import UpgradeButton from './src/componentes/Buttons/UpgradeButton';
import Button from './src/componentes/Buttons/Button';
import IconButton from './src/componentes/Buttons/IconButton';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <SocialButton onPress={() => {}} />
      <SocialButton outlined onPress={() => {}} />
      <SocialButton disabled />
      <Text style={{color: "white", alignSelf: "center"}}>No Align Self Center ↑↓</Text>
      <UpgradeButton/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        <Text style={{color: "white"}}>Wrapped with View   </Text>
        <UpgradeButton/>
      </View>
      <Button size='md' text='Button' type='overlay'/>

        {/* IconButton */}
        {/* <IconButton
          size='xs'
          type='primary'
          icon={<Text style={{color: 'white'}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
        <IconButton
          size='sm'
          type='primary'
          icon={<Text style={{color: 'white'}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
        <IconButton
          size='md'
          type='primary'
          icon={<Text style={{color: 'white'}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
          <IconButton
          size='lg'
          type='primary'
          icon={<Text style={{color: 'white'}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
          <IconButton
          size='xl'
          type='primary'
          icon={<Text style={{color: 'white'}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
          <IconButton
          size='xxl'
          type='primary'
          icon={<Text>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        /> */}

        <IconButton
          size='xs'
          type='primary'
          icon={size => <Text style={{color: 'white', fontSize: size}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
          <IconButton
          size='sm'
          type='primary'
          icon={size => <Text style={{color: 'white', fontSize: size}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
         <IconButton
          size='md'
          type='primary'
          icon={size => <Text style={{color: 'white', fontSize: size}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
          <IconButton
          size='lg'
          type='primary'
          icon={size => <Text style={{color: 'white', fontSize: size}}>O</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
        <IconButton
          size='xl'
          type='primary'
          icon={size => <Text style={{color: 'white', fontSize: size}}>{"-->"}</Text>}
          onPress={() => console.log('Icon Button Pressed')}
        />
      
        <IconButton
          size='xxl'
          type='primary'
          icon={size => <Text style={{color: 'white', fontSize: size}}>{"<"}---</Text>}
          onPress={() => console.log('Icon Button Pressed')}
          onLayout={e => console.log('sm width:', e.nativeEvent.layout.width)}

        />
       


        {/* <IconButton iconName={"home" } onPress={() => console.log('Icon Button Pressed')} /> */}
        
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
