import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './Header';
const icon = require('../images/plus.png');
const Devices = ({navigation}) => {
  const addDevice = () => {
    console.log('Device Added');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header title="Devices" icon={require('../images/plus.png')} navigation={navigation}/>
      <View style={{flex: 1, backgroundColor: '#1A1A1A', alignItems: 'center'}}>
        <TouchableOpacity onPress={addDevice}>
          <Image
            source={icon}
            style={{tintColor: 'grey', height: 40, width: 40, marginTop: 30}}
          />
          <Text style={{color: '#F5F5F5', marginTop: 10}}>Add Device</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Devices;

const styles = StyleSheet.create({});
