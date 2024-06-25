import { View, Text, Alert, Linking, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Header from './Header';

const Scanner = ({ navigation }) => {
  const [scannedData, setScannedData] = useState(null);

  const scan = async (e) => {
    try {
      console.log(e);
      const canOpen = await Linking.canOpenURL(e.data);

      Alert.alert(
        "Scanned Data",
        e.data,
        [
          {
            text: "OK",
            onPress: () => {
              if (canOpen) {
                Linking.openURL(e.data);
              }
            }
          }
        ],
        { cancelable: true }
      );

      setScannedData(e.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Header
        icon={require('../images/plus.png')}
        title="QR Scanner"
        navigation={navigation}
      />
      {!scannedData ? (
        <QRCodeScanner
          flashMode={RNCamera.Constants.FlashMode.off}
          onRead={(e) => scan(e)}
          cameraProps={{ captureAudio: false }}
        />
      ) : (
        <View style={styles.scannedDataContainer}>
          <Text style={styles.scannedDataText}>{scannedData}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scannedDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scannedDataText: {
    fontSize: 16,
    color: 'black',
    padding: 20,
  },
});

export default Scanner;
