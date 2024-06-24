import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import Feedback from 'react-native-vector-icons/MaterialIcons';
import DeviceIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from 'react-native-vector-icons/Ionicons';
import Locked from 'react-native-vector-icons/Fontisto';
import Versions from 'react-native-vector-icons/Octicons';
import About from 'react-native-vector-icons/AntDesign';
const userIcon = require('../images/account.png');
import { Divider } from '@rneui/themed';
const UserProfile = ({navigation}) => {
  const [userProfileDetails, setUserProfileDetails] = useState([
    'Feedback',
    'Device Permissions',
    'Settings',
    'App Permissions',
    'Version',
    'About this app',
  ]);
  const icons = {
    Feedback: (
      <Feedback
        name="feedback"
        size={20}
        color="white"
        style={{
          backgroundColor: 'orange',
          height: 30,
          width: 30,
          borderRadius: 30,
          textAlign: 'center',
          paddingTop: 5,
        }}
      />
    ),
    'Device Permissions': (
      <DeviceIcon
        name="devices"
        size={20}
        color="white"
        style={{
          backgroundColor: 'skyblue',
          height: 30,
          width: 30,
          borderRadius: 30,
          textAlign: 'center',
          paddingTop: 5,
        }}
      />
    ),
    Settings: (
      <Settings
        name="settings"
        size={20}
        color="white"
        style={{
          backgroundColor: 'red',
          height: 30,
          width: 30,
          borderRadius: 30,
          textAlign: 'center',
          paddingTop: 5,
        }}
      />
    ),
    'App Permissions': (
      <Locked
        name="locked"
        size={20}
        color="white"
        style={{
          backgroundColor: 'green',
          height: 30,
          width: 30,
          borderRadius: 30,
          textAlign: 'center',
          paddingTop: 5,
        }}
      />
    ),
    Version: (
      <Versions
        name="versions"
        size={20}
        color="white"
        style={{
          backgroundColor: 'tomato',
          height: 30,
          width: 30,
          borderRadius: 30,
          textAlign: 'center',
          paddingTop: 5,
        }}
      />
    ),
    'About this app': (
      <About
        name="exclamationcircle"
        size={20}
        color="white"
        style={{
          backgroundColor: 'blue',
          height: 30,
          width: 30,
          borderRadius: 30,
          textAlign: 'center',
          paddingTop: 5,
        }}
      />
    ),
  };

  const handlePermission = item => {
    Alert.alert(`Choosed ${item}`);
  };

  const handleSignin=()=>{
    navigation.navigate('Login')
  }
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handlePermission(item)}>
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>{icons[item]}</View>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header title="Profile" icon={require('../images/plus.png')} navigation={navigation}/>
      <View style={{backgroundColor: '#1A1A1A', borderRadius: 20, margin: 10}}>
        <View style={{margin:10}}>
          <TouchableOpacity onPress={handleSignin}>
            <View style={{flexDirection:'row'}}>
              <Image
                source={userIcon}
                tintColor="grey"
                style={{height: 50, width: 50}}
              />
              <View style={{margin:10}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
                Not Signed In
              </Text>
              <Text style={{color: 'grey', fontSize: 12, fontWeight: '400'}}>
                Gender | Height | Age
              </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Divider/>
        <FlatList
          data={userProfileDetails}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  },
});
