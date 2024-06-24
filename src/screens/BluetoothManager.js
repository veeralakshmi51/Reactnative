import { NativeModules, NativeEventEmitter } from 'react-native';
import BleManager from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

class BluetoothManager {
  constructor() {
    this.init();
  }

  init() {
    BleManager.start({ showAlert: false })
      .then(() => {
        console.log("Module initialized");
      })
      .catch((error) => {
        console.error("Module initialization error:", error);
      });

    bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', (peripheral) => {
      console.log('Discovered peripheral', peripheral);
    });

    bleManagerEmitter.addListener('BleManagerStopScan', () => {
      console.log('Scan stopped');
    });
  }

  scan() {
    BleManager.scan([], 50, true)
      .then(() => {
        console.log('Scanning...');
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default new BluetoothManager();
export { bleManagerEmitter };
