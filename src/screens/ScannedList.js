import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
const ScannedList = ({navigation}) => {
  const [deviceData, setDeviceData] = useState([
    {
      id: 1,
      deviceName: 'Device-1',
      deviceType: 'DeviceType-1',
      modelType: 'ModelType-1',
      uuid: '97516ea2-326e-4169-a7ad-b3515313c771',
      modelNo: '1',
    },
    {
      id: 2,
      deviceName: 'Device-2',
      deviceType: 'DeviceType-2',
      modelType: 'ModelType-2',
      uuid: '54b8c8ea-9687-47c7-8cb8-b3b4b29d7b5b',
      modelNo: '2',
    },
    {
      id: 3,
      deviceName: 'Device-3',
      deviceType: 'DeviceType-3',
      modelType: 'ModelType-3',
      uuid: 'd1f0910c-6804-4844-af38-b4c8e5f8de21',
      modelNo: '3',
    },
    {
      id: 4,
      deviceName: 'Device-4',
      deviceType: 'DeviceType-4',
      modelType: 'ModelType-4',
      uuid: '41c297ef-af76-452f-b3f8-ec30210a44a9',
      modelNo: '4',
    },
    {
      id: 5,
      deviceName: 'Device-5',
      deviceType: 'DeviceType-5',
      modelType: 'ModelType-5',
      uuid: '621a2042-adad-4a2e-9481-ff649eace21e',
      modelNo: '5',
    },
    {
      id: 6,
      deviceName: 'Device-6',
      deviceType: 'DeviceType-6',
      modelType: 'ModelType-6',
      uuid: '4281bdf8-89f3-4d9d-ba67-13ec365ff117',
      modelNo: '6',
    },
    {
      id: 7,
      deviceName: 'Device-7',
      deviceType: 'DeviceType-7',
      modelType: 'ModelType-7',
      uuid: '35bfd64a-eacc-404a-a2e5-414f2e21d97f',
      modelNo: '1',
    },
    {
      id: 8,
      deviceName: 'Device-8',
      deviceType: 'DeviceType-8',
      modelType: 'ModelType-8',
      uuid: '65da556c-3c22-4eac-9a81-404f525f80ef',
      modelNo: '8',
    },
    {
      id: 9,
      deviceName: 'Device-9',
      deviceType: 'DeviceType-9',
      modelType: 'ModelType-9',
      uuid: '97516ea2-326e-4169-a7ad-b3515313c771',
      modelNo: '9',
    },
    {
      id: 10,
      deviceName: 'Device-10',
      deviceType: 'DeviceType-10',
      modelType: 'ModelType-10',
      uuid: '54b8c8ea-9687-47c7-8cb8-b3b4b29d7b5b',
      modelNo: '10',
    },
    {
      id: 11,
      deviceName: 'Device-11',
      deviceType: 'DeviceType-11',
      modelType: 'ModelType-11',
      uuid: 'd1f0910c-6804-4844-af38-b4c8e5f8de21',
      modelNo: '11',
    },
    {
      id: 12,
      deviceName: 'Device-12',
      deviceType: 'DeviceType-12',
      modelType: 'ModelType-12',
      uuid: '41c297ef-af76-452f-b3f8-ec30210a44a9',
      modelNo: '12',
    },
    {
      id: 13,
      deviceName: 'Device-13',
      deviceType: 'DeviceType-13',
      modelType: 'ModelType-13',
      uuid: '621a2042-adad-4a2e-9481-ff649eace21e',
      modelNo: '13',
    },
    {
      id: 14,
      deviceName: 'Device-14',
      deviceType: 'DeviceType-14',
      modelType: 'ModelType-14',
      uuid: '4281bdf8-89f3-4d9d-ba67-13ec365ff117',
      modelNo: '14',
    },
    {
      id: 15,
      deviceName: 'Device-15',
      deviceType: 'DeviceType-15',
      modelType: 'ModelType-15',
      uuid: '35bfd64a-eacc-404a-a2e5-414f2e21d97f',
      modelNo: '15',
    },
    {
      id: 16,
      deviceName: 'Device-16',
      deviceType: 'DeviceType-16',
      modelType: 'ModelType-16',
      uuid: '65da556c-3c22-4eac-9a81-404f525f80ef',
      modelNo: '16',
    },
  ]);

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.row}>
        <Text style={[styles.text, {width: 25, textAlign: 'center'}]}>
          {item.id}
        </Text>
        <Text style={[styles.text, {width: 100, textAlign: 'center'}]}>
          {item.deviceName}
        </Text>
        <Text style={[styles.text, {width: 100, textAlign: 'center'}]}>
          {item.deviceType}
        </Text>
        <Text style={[styles.text, {width: 100, textAlign: 'center'}]}>
          {item.modelNo}
        </Text>
        <Text style={[styles.text, {width: 100, textAlign: 'center'}]}>
          {item.modelType}
        </Text>
        <Text style={[styles.text, {width: 250, textAlign: 'center'}]}>
          {item.uuid}
        </Text>
      </View>
    );
  };
const gotoScanner=()=>{
    navigation.navigate('Scanner')
}
  return (
    <View style={styles.container}>
     <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
     <Text style={{color: 'tomato', textAlign: 'center', fontSize: 25}}>
        Scanned Devices List
      </Text>
       <TouchableOpacity onPress={gotoScanner}>
       <Icon name='qr-code-sharp' size={25} color='white'/>
       </TouchableOpacity>
     </View>
      <ScrollView horizontal>
        <View style={styles.listContainer}>
          <View style={styles.header}>
            <Text style={[styles.headerText, {width: 25, textAlign: 'center'}]}>
              ID
            </Text>
            <Text
              style={[styles.headerText, {width: 100, textAlign: 'center'}]}>
              Device Name
            </Text>
            <Text
              style={[styles.headerText, {width: 100, textAlign: 'center'}]}>
              Device Type
            </Text>
            <Text
              style={[styles.headerText, {width: 100, textAlign: 'center'}]}>
              Model Number
            </Text>
            <Text
              style={[styles.headerText, {width: 100, textAlign: 'center'}]}>
              Model Type
            </Text>
            <Text
              style={[styles.headerText, {width: 250, textAlign: 'center'}]}>
              UUID
            </Text>
          </View>
          <FlatList
            data={deviceData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ScannedList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'tomato',
    marginBottom:10
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    color:'white'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 1,
    marginVertical: 4,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: '#1a1a1a',
    paddingBottom:10,
    paddingTop:10
    
  },
  text: {
    color: 'white',
    fontSize: 14,
    flex: 1,
  },
});
