/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TEST?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

import React, { useState, useEffect } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';  // You'll need to install this package

export default function App() {
  const [availableDevices, setAvailableDevices] = useState([]);

  useEffect(() => {
    async function fetchDevices() {
      try {
        const devices = await BluetoothSerial.list();
        setAvailableDevices(devices.map(device => device.name).join(', '));
      } catch (error) {
        console.log(error);
      }
    }
    fetchDevices();
  }, []);


  return (
    <View style={styles.container}>
      <Text>
        {availableDevices}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:100,
  }})