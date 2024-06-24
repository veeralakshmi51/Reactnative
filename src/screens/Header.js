import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
} from 'react-native';

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
    navigation.navigate('BluetoothManager');
  };
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{
            fontSize: 25,
            marginLeft: '10%',
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
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                console.log('Add Device clicked');
                addDevice();
                closeModal();
              }}>
              <Text style={styles.modalText}>Add Device</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                console.log('Scanner clicked');
                navigation.navigate('Scanner')
                closeModal();
              }}>
              <Text style={styles.modalText}>Scanner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={closeModal}>
              <Text style={styles.modalText}>Cancel</Text>
            </TouchableOpacity>
          </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 250,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
