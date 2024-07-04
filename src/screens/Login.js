// import {View, Text, Alert, TouchableOpacity} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// const Login = ({navigation}) => {
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//         '829484604334-a2grdbv4p2evu23j9mi3hcrgpbal053h.apps.googleusercontent.com',
//       offlineAccess: true,
//       forceCodeForRefreshToken: true,
//     });
//     isSignedIn();
//   }, []);

//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log('user information', userInfo);
//       setUser(userInfo);
//     } catch (error) {
//       console.log('error is here', error);
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('user cancelled the login flow');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('signin');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         console.log('play service is not available');
//       } else {
//         console.log('some other error happens');
//       }
//     }
//   };

//   const isSignedIn = async () => {
//     const isSignedIn = await GoogleSignin.isSignedIn();
//     if (!!isSignedIn) {
//       getCurrentUserInfo();
//     } else {
//       console.log('please login');
//     }
//   };

//   const getCurrentUserInfo = async () => {
//     try {
//       const userInfo = await GoogleSignin.signInSilently();
//       console.log('edit', user);
//       setUser(userInfo);
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
//         Alert.alert('user has not signed in yet');
//         console.log('user has not signed in yet');
//       } else {
//         console.log('something went wrong');
//       }
//     }
//   };

//   const signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       setUser({});
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const afterLogin = () => {
//     console.log('after login');
//     navigation.navigate('Register');
//   };
//   return (
//     <View style={{flex: 1, margin: 50}}>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         {!user.idToken ? (
//           <GoogleSigninButton
//             style={{width: 192, height: 48}}
//             size={GoogleSigninButton.Size.Wide}
//             color={GoogleSigninButton.Color.Dark}
//             onPress={signIn}
//           />
//         ) : (
//           <TouchableOpacity onPress={signOut}>
//             <Text>Signout</Text>
//           </TouchableOpacity>
//         )}
//         <TouchableOpacity onPress={afterLogin}>
//           <Text style={{color: 'black', margin: 20}}>
//             Register after sso authetication
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { View, Pressable, Image, Text } from 'react-native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '238991900768-5akimjct80t9cmet1qll8aouqoadc7of.apps.googleusercontent.com',
//   androidClientId: '238991900768-cod8jepu1mqfr9n14cnric8u8175uh29.apps.googleusercontent.com',
//   iosClientId: '238991900768-quvn6iuak4juf4bqncrcpvhfpenilu0c.apps.googleusercontent.com',
//   scopes: ['profile', 'email'],
// });

// const GoogleLogin = async () => {
//   await GoogleSignin.hasPlayServices();
//   const userInfo = await GoogleSignin.signIn();
//   return userInfo;
// };

// export default function Login() {
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState('');

//   const handleGoogleLogin = async () => {
//     setLoading(true);
//     try {
//       const response = await GoogleLogin();
//       const { idToken, user } = response;
//       console.log('user', user);
//       setUser(user);
//       // if (idToken) {
//       //   const resp = await authAPI.validateToken({
//       //     token: idToken,
//       //     email: user.email,
//       //   });
//       //   await handlePostLoginData(resp.data);
//       // }
//     } catch (apiError) {
//       setError(
//         apiError?.response?.data?.error?.message || 'Something went wrong',
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'black'}}>
//       <Pressable onPress={handleGoogleLogin}>
//         <Text >Continue with Google</Text>
//       </Pressable>
//       {user && (
//         <View style={{ alignItems: 'center', marginTop: 20 }}>
//           <Image source={{ uri: user?.photo }} style={{ height: 100, width: 100 }} />
//           <Text>{user?.name}</Text>
//         </View>
//       )}
//       {error && <Text style={{ color: 'red' }}>{error}</Text>}
//       {loading && <Text>Loading...</Text>}
//     </View>
//   );
// }

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

// import { View, Text, Button } from 'react-native'
// import React, { useState } from 'react'
// import {GoogleSignin} from '@react-native-google-signin/google-signin'
// const Login = () => {
// const [user,setUser]=useState(null);

//   GoogleSignin.configure({
//     webClientId:'402165749049-5pb8av6tgjauf6gi827n9vg991vdu25c.apps.googleusercontent.com',
//   })

//   const signin=async()=>{
//     try{
//       const userInfo=await GoogleSignin.signIn();
//       setUser(userInfo);
//     }catch(error){
//       console.log(error);
//     }
//   }
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     {user ?(
//       <View>
//         <Text style={{color:'white'}}>Welcome{user.name}</Text>
//       </View>
//     ):(
//       <Button title='Signin with google' onPress={signin}/>
//     )}
//     </View>
//   )
// }

// export default Login
