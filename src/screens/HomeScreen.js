import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import BloodIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome'
import {ScrollView} from 'react-native-virtualized-view';
const image = require('../images/chart.png');
const respiration = require('../images/lungs.png');
const thermo = require('../images/nature.png');
import Vitals from './Vitals';
const HomeScreen = ({navigation}) => {
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

  const handleSignin=()=>{
    console.log('Moved on to login page');
    navigation.navigate('Login');
  }

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header title="Welcome User" icon={require('../images/plus.png')} navigation={navigation}/>
      <ScrollView>
        <TouchableOpacity onPress={vitalsMonitor}>
          <View style={styles.container}>
            <Image source={image} style={{height: 100, width: 100,opacity:0.3}} />
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
        <TouchableOpacity onPress={handleSignin}>
          <View style={styles.signinView}>
          <View style={{flexDirection:'row'}}>
          <Icon name='user-circle-o' size={30} color='white' style={{marginRight:10}}/>
          <Text style={{color:'white',fontSize:20}}>Sign In</Text>
          </View>
            <Text style={{color:'white'}}>Signin to sync your device</Text>
          </View>
        </TouchableOpacity>
          <View><Vitals navigation={navigation}/></View>
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
    marginTop:20
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
  signinView:{
    backgroundColor:'#1A1A1A',
    borderRadius:10,
    padding:10,
    margin:10,
    paddingLeft:20,
    rowGap:10
  }
});
