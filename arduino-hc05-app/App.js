import React, { useState, useEffect } from 'react';
import { View, Picker, Button } from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';  // You'll need to install this package

export default function App() {
  const [availableDevices, setAvailableDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Fetch available Bluetooth devices
  useEffect(() => {
    async function fetchDevices() {
      try {
        const devices = await BluetoothSerial.list();
        setAvailableDevices(devices);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDevices();
  }, []);

  // Handle device selection and attempt to connect
  /*const handlePickerChange = async (itemValue) => {
    try {
      const connected = await BluetoothSerial.connect(itemValue);  // Attempt to connect
      setIsConnected(connected);
      setSelectedDevice(itemValue);
    } catch (error) {
      console.log(error);
      setIsConnected(false);
    }
  };*/

  return (
    <View>
      {//<Picker
        /*selectedValue={selectedDevice}
        onValueChange={(itemValue) => handlePickerChange(itemValue)}
      >
        {availableDevices.map((device, index) => (
          <Picker.Item key={index} label={device.name} value={device.id} />
        ))}
      </Picker>*/
      //<Button title="Connect" onPress={() => { /* Additional actions if needed */ }} /> 
      }
      <Text>{availableDevices}</Text>
    </View>
  );
}
