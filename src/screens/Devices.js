import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './Header';
import BluetoothManager from './BluetoothManager';
const icon = require('../images/plus.png');
const Devices = ({navigation}) => {
  // const addDevice = () => {
  //   console.log('Device Added');
  //   navigation.navigate('BluetoothManager');
  // };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header
        title="Devices"
        icon={require('../images/plus.png')}
        navigation={navigation}
      />
      <View style={{flex: 1}}>
        {/* <TouchableOpacity onPress={addDevice}> */}
        {/* <Image
            source={icon}
            style={{tintColor: 'grey', height: 40, width: 40, marginTop: 30}}
          />
          <Text style={{color: '#F5F5F5', marginTop: 10}}>Add Device</Text> */}
        {/* </TouchableOpacity> */}

        <BluetoothManager />
      </View>
    </View>
  );
};

export default Devices;

const styles = StyleSheet.create({});
