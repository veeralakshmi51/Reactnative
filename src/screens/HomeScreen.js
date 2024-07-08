import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from './Header';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import BloodIcon from 'react-native-vector-icons/Fontisto';
import {ScrollView} from 'react-native-virtualized-view';
const image = require('../images/chart.png');
const respiration = require('../images/lungs.png');
const thermo = require('../images/nature.png');
import Vitals from './Vitals';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState,useContext} from 'react';
import { UserContext } from '../Context/UserContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Button} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const {userInfo,setUserInfo}=useContext(UserContext);
  const [vitals, setVitals] = useState({
    v1: '72bpm',
    v2: ' 120/80 mm Hg',
    v3: '18bpm',
    v4: '95%',
  });

  const vitalsMonitor = () => {
    console.log('vitals checked');
    navigation.navigate('VitalsReport');
  };

  useEffect(() => {
    console.log('it');

    GoogleSignin.configure({
      webClientId:
        '829484604334-a2grdbv4p2evu23j9mi3hcrgpbal053h.apps.googleusercontent.com',
    });
  }, []);

  const signin = async () => {
    try {
      console.log('i am');
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
      console.log('user details', user);
      // Alert.alert(user.user.email, user.user.name);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(statusCodes.SIGN_IN_CANCELLED);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(statusCodes.IN_PROGRESS);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
      } else {
        console.log(error);
      }
    }
  };

  const signout = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header
        title="Welcome User"
        icon={require('../images/plus.png')}
        navigation={navigation}
      />
      <ScrollView>
        <TouchableOpacity onPress={vitalsMonitor}>
          <View style={styles.container}>
            <Image
              source={image}
              style={{height: 100, width: 100, opacity: 0.3}}
            />
            <View style={styles.textContainer}>
              <View style={styles.textWithIcon}>
                <HeartIcon
                  name="heartbeat"
                  size={20}
                  color="#EF6262"
                  style={styles.icon}
                />
                <Text style={styles.text}>{vitals.v1}</Text>
              </View>
              <View style={styles.textWithIcon}>
                <BloodIcon
                  name="blood-drop"
                  size={20}
                  color="#204A5D"
                  style={styles.icon}
                />
                <Text style={styles.text}>{vitals.v2}</Text>
              </View>
              <View style={styles.textWithIcon}>
                <Image source={respiration} style={styles.imageIcon} />
                <Text style={styles.text}>{vitals.v3}</Text>
              </View>
              <View style={styles.textWithIcon}>
                <Image source={thermo} style={styles.imageIcon1} />
                <Text style={styles.text}>{vitals.v4}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {userInfo === null ? (
          <TouchableOpacity onPress={signin}>
            <View style={styles.signinView}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="user-circle-o"
                  size={30}
                  color="white"
                  style={{marginRight: 10}}
                />
                <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
                <Text style={{color: 'grey', top: 25, right: 42}}>
                  SignIn with Google Accounts
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <View style={styles.signinView}>
              <View style={{flexDirection: 'row'}}>
                {userInfo !== null && (
                  <Image
                    source={{uri: userInfo.user.photo}}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                      marginRight: 10,
                      borderColor: 'white',
                      borderWidth: 1.5,
                    }}
                  />
                )}
                <View>
                  {userInfo !== null && (
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color: 'white', fontSize: 20}}>
                        {userInfo.user.name}
                      </Text>
                      <TouchableOpacity
                        style={{
                          marginLeft: '22%',
                          backgroundColor: 'orange',
                          paddingLeft: 10,
                          paddingRight: 10,
                          justifyContent: 'center',
                          borderRadius: 20,
                        }}
                        onPress={signout}>
                        <Text style={{color: 'black', fontSize: 15}}>
                          SignOut{' '}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {userInfo !== null && (
                    <Text style={{color: 'grey'}}>{userInfo.user.email}</Text>
                  )}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        <View>
          <Vitals navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#1A1A1A',
    marginTop: 20,
  },
  textContainer: {
    flexDirection: 'column',
    paddingHorizontal: '20%',
    rowGap: 5,
  },
  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  imageIcon: {
    height: 20,
    width: 20,
    tintColor: '#FBBC57',
    marginRight: 10,
  },
  imageIcon1: {
    height: 20,
    width: 20,
    tintColor: '#24809D',
    marginRight: 10,
  },
  signinView: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    paddingLeft: 20,
    rowGap: 10,
  },
});
