import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import BleManager from 'react-native-ble-manager';

const App = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [devices, setDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [receivedData, setReceivedData] = useState(null);

  useEffect(() => {
    BleManager.start({ showAlert: false });
  }, []);

  const startScan = () => {
    setIsScanning(true);
    BleManager.scan([], 5, true)
      .then(() => {
        console.log('Scanning...');
      });
  };

  const stopScan = () => {
    setIsScanning(false);
    BleManager.stopScan()
      .then(() => {
        console.log('Scan stopped');
      });
  };

  const connectToDevice = (device) => {
    BleManager.connect(device.id)
      .then(() => {
        console.log('Connected to ' + device.id);
        setConnectedDevice(device);
      })
      .catch((error) => {
        console.log('Connection failed', error);
      });
  };

  // Add your logic to perform operations based on receivedData

  return (
    <View>
      <Text>HC05 Bluetooth Communication</Text>
      <Button title={isScanning ? 'Stop Scan' : 'Start Scan'} onPress={isScanning ? stopScan : startScan} />
      <FlatList
        data={devices}
        renderItem={({ item }) => (
          <Button title={item.name || item.id} onPress={() => connectToDevice(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Text>Received Data: {receivedData}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
