import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {UserContext} from '../Context/UserContext';
import {Divider} from '@rneui/themed';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native-gesture-handler';
import Height from './Height';

const ProfileDetails = ({navigation}) => {
  const [gender, setGender] = useState('');
  const [visible, setVisible] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [heightModal, setHeightModal] = useState(false);
  const {userInfo, setUserInfo} = useContext(UserContext);
  const handlePress = () => {
    console.log('click');
    navigation.goBack();
  };
  const selectGender = () => {
    setVisible(true);
  };
  const selectDate = () => {
    setDateModal(true);
  };
  const selectHeight = () => {
    setHeightModal(true);
  };

  const handleSelectGender = selectedGender => {
    setGender(selectedGender);
    setVisible(false);
  };
  const [height, setHeight] = useState('');
  const [selectedHeight, setSelectedHeight] = useState(null);

  const handleHeight = selectedHeight => {
    setHeight(selectedHeight);
    setSelectedHeight(selectedHeight);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <TouchableOpacity onPress={handlePress}>
        <Icon
          name="keyboard-backspace"
          size={30}
          color="white"
          style={{margin: '8%'}}
        />
      </TouchableOpacity>
      <Text style={{color: 'grey', marginLeft: '8%', fontSize: 40}}>
        My Profile
      </Text>
      <Divider style={{margin: 20}} color="grey" />
      <View style={{margin: 20}}>
        {userInfo ? (
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{uri: userInfo.user.photo}}
              style={{height: 60, width: 60, borderRadius: 50}}
            />
            <View style={{flexDirection: 'column', margin: 10}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
                {userInfo.user.name}
              </Text>
              <Text style={{color: 'grey', fontSize: 18, fontWeight: '500'}}>
                ID: {userInfo.user.id}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            No User Information Available
          </Text>
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={selectGender}
          style={{
            marginLeft: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: '10%',
            marginBottom: '10%',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Gender {''}</Text>
          {gender ? (
            <Text style={{color: 'grey', fontSize: 15}}>{gender}</Text>
          ) : (
            <Icon1 name="keyboard-arrow-right" size={25} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={selectDate}
          style={{
            marginLeft: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: '10%',
            marginBottom: '10%',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Date of Birth</Text>
          <Icon1 name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={selectHeight}
          style={{
            marginLeft: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: '10%',
            marginBottom: 20,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Height</Text>
          {height ? (
            <Text style={{color: 'grey', fontSize: 15}}>{height} CM</Text>
          ) : (
            <Icon1 name="keyboard-arrow-right" size={25} />
          )}
        </TouchableOpacity>
      </View>
      <Modal
        animationInTiming={500}
        animationIn="slideInUp"
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}
        style={{width: '100%', margin: 0}}>
        <View
          style={{
            backgroundColor: '#1a1a1a',
            position: 'absolute',
            bottom: 0,
            height: 250,
            width: '100%',
            borderRadius: 20,
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
              Gender
            </Text>
            <View style={{margin: '10%', marginTop: 20, rowGap: 30}}>
              <TouchableOpacity onPress={() => handleSelectGender('Male')}>
                {gender === 'Male' ? (
                  <Text style={{color: 'tomato', fontSize: 20}}>Male</Text>
                ) : (
                  <Text style={{color: 'white', fontSize: 20}}>Male</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelectGender('Female')}>
                {gender === 'Female' ? (
                  <Text style={{color: 'tomato', fontSize: 20}}>Female</Text>
                ) : (
                  <Text style={{color: 'white', fontSize: 20}}>Female</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: '#333333',
                  height: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setVisible(false)}>
                <Text style={{color: 'white', fontSize: 20}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationInTiming={500}
        animationIn="slideInUp"
        isVisible={dateModal}
        onBackButtonPress={() => setDateModal(false)}
        style={{width: '100%', margin: 0}}>
        <View
          style={{
            backgroundColor: '#1a1a1a',
            position: 'absolute',
            bottom: 0,
            height: 250,
            width: '100%',
            borderRadius: 20,
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
              Date of Birth
            </Text>
          </View>
        </View>
      </Modal>
      <Modal
        animationInTiming={500}
        animationIn="slideInUp"
        isVisible={heightModal}
        onBackButtonPress={() => setHeightModal(false)}
        style={{width: '100%', margin: 0}}>
        <View
          style={{
            backgroundColor: '#1a1a1a',
            position: 'absolute',
            bottom: 0,
            height: 300,
            width: '100%',
            borderRadius: 20,
            padding: 20,
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Height
            </Text>
            <ScrollView>
              <Height
                handleHeight={handleHeight}
                selectedHeight={selectedHeight}
              />
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setHeightModal(false)}>
              <Text style={{color: 'white', fontSize: 18}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton,{backgroundColor:'tomato'}]}
              onPress={() => setHeightModal(false)}>
              <Text style={{color: 'white', fontSize: 18}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  modalButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#333333',
    borderRadius: 30,
  },
});
