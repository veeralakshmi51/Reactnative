import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const Login = ({navigation}) => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    console.log('it');

    GoogleSignin.configure({
      webClientId:
        '829484604334-a2grdbv4p2evu23j9mi3hcrgpbal053h.apps.googleusercontent.com',
    });
  },[]);

  const signin = async () => {
    try {
      console.log('i am');
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
      console.log('user details',user);
      Alert.alert(user.user.email,user.user.name);
      navigation.navigate('Register');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(statusCodes.SIGN_IN_CANCELLED)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(statusCodes.IN_PROGRESS)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE)
      } else {
        console.log(error)
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      {userInfo !== null && <Text style={{color:'white',margin:10,fontSize:20}}>{userInfo.user.name}</Text>}
      {userInfo !== null && <Text style={{color:'tomato',fontSize:20}}>{userInfo.user.email}</Text>}
      {userInfo !== null && (
        <Image
          source={{uri: userInfo.user.photo}}
          style={{width: 100, height: 100,borderRadius:50,margin:20,borderColor:'white',borderWidth:1.5}}
        />
      )}

      {userInfo === null ? (
        <TouchableOpacity onPress={() => signin()}>
          <Text
            style={{
              padding: 20,
              borderWidth: 1,
              borderColor: 'grey',
              color: 'white',
            }}>
            Googlesignin
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => signout()}>
          <Text
            style={{
              padding: 20,
              borderWidth: 1,
              borderColor: 'grey',
              color: 'white',
            }}>
            Signout
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Login;
