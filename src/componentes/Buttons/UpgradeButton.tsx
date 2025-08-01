import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const UpgradeButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        colors={['#FFADFF', '#FFBC70', '#8AC2FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>🔝 Upgrade</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
export default UpgradeButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#671849',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 18,
    fontFamily: 'SF Pro',
  },
})