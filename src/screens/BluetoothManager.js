// import { NativeModules, NativeEventEmitter } from 'react-native';
// import BleManager from 'react-native-ble-manager';

// const BleManagerModule = NativeModules.BleManager;
// const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

// class BluetoothManager {
//   constructor() {
//     this.init();
//   }

//   init() {
//     BleManager.start({ showAlert: false })
//       .then(() => {
//         console.log("Module initialized");
//       })
//       .catch((error) => {
//         console.error("Module initialization error:", error);
//       });

//     bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', (peripheral) => {
//       console.log('Discovered peripheral', peripheral);
//     });

//     bleManagerEmitter.addListener('BleManagerStopScan', () => {
//       console.log('Scan stopped');
//     });
//   }

//   scan() {
//     BleManager.scan([], 50, true)
//       .then(() => {
//         console.log('Scanning...');
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }
// }

// export default new BluetoothManager();
// export { bleManagerEmitter };
import { View, Text,PermissionsAndroid,Button } from 'react-native'
import React from 'react'

const BluetoothManager =() => {

  const requestBluetoothPermissionAccess=async()=>{
    try{
      const granted=await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,{
          title:'Permission Access for Bluetooth Connectivity',
          message:'My Vitals app needs to access your bluetooth device',
          buttonNeutral:'Ask Me Later',
          buttonPositive:'Ok',
          buttonNegative:'Cancel'
        }
      )
      if(granted===PermissionsAndroid.RESULTS.GRANTED){
        console.log('You can access the bluetooth connectivity');
      }
      else{
        console.log('permission denied');
      }
  }
  catch(error){
    console.log('error',error)
  }
}
  return (
    <View>
      <Text>BluetoothManager</Text>
      <Button title='Start Scanning' onPress={requestBluetoothPermissionAccess}/>
    </View>
  )
}

export default BluetoothManager