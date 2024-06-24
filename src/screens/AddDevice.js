import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import BluetoothManager, { bleManagerEmitter } from './BluetoothManager';

const AddDevice = () => {
  const [peripherals, setPeripherals] = useState([]);

  useEffect(() => {
    const handleDiscoverPeripheral = (peripheral) => {
      setPeripherals((prev) => {
        if (prev.find(p => p.id === peripheral.id)) return prev;
        return [...prev, peripheral];
      });
    };

    const discoverPeripheralListener = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral
    );

    return () => {
      discoverPeripheralListener.remove();
    };
  }, []);

  const startScan = () => {
    BluetoothManager.scan();
  };

  return (
    <View>
      <Button title="Start Scan" onPress={startScan} />
      <FlatList
        data={peripherals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>ID: {item.id}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AddDevice;
