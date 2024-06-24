import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const Login = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '622174434879-kd75u6kl7fqcio9tmvcu27seqq4um11t.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignedIn();
  }, []);

  const signIn = async () => {
    try{
        await GoogleSignin.hasPlayServices();
        const userInfo=await GoogleSignin.signIn();
        console.log('user information',userInfo);
        setUser(userInfo);
    }
    catch(error){
        console.log('error is here',error);
        if(error.code===statusCodes.SIGN_IN_CANCELLED){
            console.log('user cancelled the login flow');
        }
        else if(error.code===statusCodes.IN_PROGRESS){
          console.log('signin');      
        } else if(error.code===statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
            console.log('play service is not available');
        }
        else{
            console.log('some other error happens');
        }
    }
  };

  const isSignedIn=async()=>{
    const isSignedIn=await GoogleSignin.isSignedIn()
    if(!!isSignedIn){
        getCurrentUserInfo()
    }else{
        console.log('please login');
    }
  }

  const getCurrentUserInfo=async()=>{
    try{
        const userInfo=await GoogleSignin.signInSilently();
        console.log('edit',user);
        setUser(userInfo);
    }
    catch(error){
        if(error.code===statusCodes.SIGN_IN_REQUIRED){
            Alert.alert('user has not signed in yet');
            console.log('user has not signed in yet');
        } else{
            console.log('something went wrong');
        }
    }
  }

  const signOut=async()=>{
    try{
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setUser({});
    }
    catch(error){
        console.error(error);
    }
  }
  return (
    <View style={{flex:1,margin:50}}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {!user.idToken?<GoogleSigninButton style={{width:192,height:48}} size={GoogleSigninButton.Size.Wide} color={GoogleSigninButton.Color.Dark} onPress={signIn}/>:<TouchableOpacity onPress={signOut}><Text>Signout</Text></TouchableOpacity>}
    </View>
    </View>
  );
};

export default Login;