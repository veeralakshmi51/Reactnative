import {View, Text, Alert, Linking, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const Scanner = ({navigation}) => {
  const [scannedData, setScannedData] = useState(null);

  const scan = async e => {
    try {
      console.log(e);
      const canOpen = await Linking.canOpenURL(e.data);

      Alert.alert(
        'Scanned Data',
        e.data,
        [
          {
            text: 'OK',
            onPress: () => {
              if (canOpen) {
                Linking.openURL(e.data);
              }
            },
          },
        ],
        {cancelable: true},
      );

      setScannedData(e.data);
      navigation.navigate('ScannedList')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {!scannedData ? (
        <QRCodeScanner
          flashMode={RNCamera.Constants.FlashMode.off}
          onRead={e => scan(e)}
          cameraProps={{captureAudio: false}}
        />
      ) : (
        <View style={styles.scannedDataContainer}>
        <Text style={{alignSelf:'center',margin:10,fontSize:18,color:'tomato'}}>Scanned Data</Text>
          <Text style={styles.scannedDataText}>{scannedData}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  scannedDataContainer: {
    backgroundColor: '#1a1a1a',
    borderWidth:2,
    borderColor:'white',
    elevation:5,
    borderRadius:20,
    alignContent:'center',
    margin:'10%',
    height:350,
    opacity:1
    
  },
  scannedDataText: {
    fontSize: 15,
    color: 'white',
    margin:20,
    marginTop:20,
    
  },
});

export default Scanner;
