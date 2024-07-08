import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
const Header = ({title, icon, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const clickIcon = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const addDevice = () => {
    console.log('came');
    navigation.navigate('Device');
  };
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{
            fontSize: 25,
            marginLeft: '20%',
            fontWeight: '700',
            color: '#FFF',
          }}>
          {title}
        </Text>
      </View>

      <TouchableOpacity style={styles.backbutton} onPress={clickIcon}>
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Modal
        animationInTiming={500}
        animationIn="fadeIn"
        isVisible={modalVisible}
        onBackButtonPress={closeModal}
        style={{
          margin: 0,
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          
        }}>
        <View style={styles.modalContent}>
          {/* <TouchableOpacity onPress={closeModal}>
            <Icon name='close-circle-outline' size={20} color='black' style={{textAlign:'right'}}/>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              console.log('Add Device clicked');
              addDevice();
              closeModal();
            }}>
            <Text style={styles.modalText}>Connect Via Bluetooth</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              console.log('Scanner clicked');
              navigation.navigate('ScannedList');
              closeModal();
            }}>
            <Text style={styles.modalText}>Device List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalOption,{backgroundColor:'tomato',borderRadius:20,width:80,alignSelf:'center'}]}
            onPress={() => {
              closeModal();
            }}>
            <Text style={styles.modalText}>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 30,
    backgroundColor: 'black',
  },
  back: {
    height: 30,
    width: 30,
    tintColor: '#FFF',
  },
  backbutton: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },

  modalContent: {
    width: 200,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginTop: 40,
    height:150
  },
  modalOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalText: {
    fontSize: 18,
    color: '#f5f5f5',
  },
});
