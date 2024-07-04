import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Header from './Header';
const icon = require('../images/plus.png');
import Modal from 'react-native-modal';
const Devices = ({navigation}) => {
 const [visible,setVisible]=useState(false);
 const[visible1,setVisible1]=useState(false);
 const [visible2,setVisible2]=useState(false);
 const handleExit=()=>{
  setVisible(false)
 }
 const handleExit1=()=>{
  setVisible1(false)
 }
 const handleExit2=()=>{
  setVisible2(false);
 }
 const handleAgree=()=>{
  setVisible(false)
  setVisible1(true)
 }
 const handleAgree1=()=>{
  setVisible1(false)
  setVisible2(true)
 }
 const handleDevice=()=>{
  setVisible2(false)
  navigation.navigate('BluetoothManager')
 }
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header
        title="Devices"
        icon={require('../images/plus.png')}
        navigation={navigation}
      />
      <View style={{flex: 1,alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>setVisible(true)}>
        <Image
            source={icon}
            style={{tintColor: 'grey', height: 40, width: 40, marginTop: 30}}
          />
          <Text style={{color: '#F5F5F5', marginTop: 10}}>Add Device</Text>
        </TouchableOpacity>

      </View>
      <Modal
        animationInTiming={500}
        animationIn="slideInUp"
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}
        style={{width: '100%', marginBottom: 0, marginLeft: 0}}>
        <View
          style={{
            backgroundColor: '#1a1a1a',
            position: 'absolute',
            bottom: 0,
            height: 180,
            width: '100%',
            left: 0,
            right: 0,
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 20,
              }}>
              To add new devices,allow access to location
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 40,
              }}>
              <TouchableOpacity
                style={{
                  width: '45%',
                  backgroundColor: 'grey',
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleExit}>
                <Text
                  style={{color: '#f5f5f5', fontWeight: '600', fontSize: 20}}>
                  Deny
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={handleAgree}
                style={{
                  width: '45%',
                  backgroundColor: 'tomato',
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                  Agree
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationInTiming={500}
        animationIn="slideInUp"
        isVisible={visible1}
        onBackButtonPress={() => setVisible1(false)}
        style={{width: '100%', marginBottom: 0, marginLeft: 0}}>
        <View
          style={{
            backgroundColor: '#1a1a1a',
            position: 'absolute',
            bottom: 0,
            height: 300,
            width: '100%',
            left: 0,
            right: 0,
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Permission required
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'start',
                marginTop: 10,
                marginLeft: 30,
              }}>
              To be able to search for Bluetooth devices,allow this app to
              access location.
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: '500',
                textAlign: 'start',
                marginTop: 10,
                marginLeft: 30,
              }}>
              You won't be able to use this service inless you grant the
              required permissions. but it won't affect your use of other
              services., You can always restrict permissions in the Settings.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 40,
              }}>
              <TouchableOpacity
                style={{
                  width: '45%',
                  backgroundColor: 'grey',
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleExit1}>
                <Text
                  style={{color: '#f5f5f5', fontWeight: '600', fontSize: 20}}>
                  Deny
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '45%',
                  backgroundColor: 'tomato',
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleAgree1}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                  Agree
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationInTiming={500}
        animationIn="slideInUp"
        isVisible={visible2}
        onBackButtonPress={() => setVisible2(false)}
        style={{width: '100%', marginBottom: 0, marginLeft: 0}}>
        <View
          style={{
            backgroundColor: '#1a1a1a',
            position: 'absolute',
            bottom: 0,
            height: 200,
            width: '100%',
            left: 0,
            right: 0,
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Transfer Via Bluetooth
            </Text>
            <Text
              style={{
                color: '#f5f5f5',
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'start',
                marginTop: 20,
                marginLeft: 20,
              }}>
              This app needs to transfer data from your device via Bluetkooth.
              Allow now?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 40,
              }}>
              <TouchableOpacity
                style={{
                  width: '45%',
                  backgroundColor: 'grey',
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleExit2}>
                <Text
                  style={{color: '#f5f5f5', fontWeight: '600', fontSize: 20}}>
                  Deny
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDevice}
                style={{
                  width: '45%',
                  backgroundColor: 'tomato',
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                  Agree
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Devices;

const styles = StyleSheet.create({});
