import {
  Alert,
  BackHandler,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LocationIcon from 'react-native-vector-icons/Entypo';
import {CheckBox} from 'react-native-elements';
const Termsandconditions = ({navigation}) => {
  const [selected, setSelected] = useState(false);
  const agreeTerms = () => {
    if (selected) {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Please agree all the terms and conditions');
    }
  };
  const back = () => {
    BackHandler.exitApp();
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text style={styles.header}>Terms and Conditions</Text>
      <Text style={styles.condition}>
        Welcome to Patient Vitals monitoring App. You can use this app to manage
        your devices, track your health condition, and view your vitals data. We
        shall protect your personal information in accordance with the relevant
        laws, regulations, and private policies. To be able to work normally,
        this app needs to connect to the internet.
      </Text>
      <Text style={styles.permissionsText}>
        To provide you with additional services while you're using the app, we
        might need the following permissions:
      </Text>
      <View style={styles.permissionItem}>
        <LocationIcon
          name="location-pin"
          size={20}
          color="white"
          style={styles.icon}
        />
        <View>
          <Text style={styles.permissionTitle}>Access Location</Text>
          <Text style={styles.permissionDescription}>
            For tracking your location
          </Text>
        </View>
      </View>
      <View style={styles.permissionItem}>
        <LocationIcon
          name="bar-graph"
          size={20}
          color="white"
          style={styles.icon}
        />
        <View>
          <Text style={styles.permissionTitle}>
            Access Activity Information
          </Text>
          <Text style={styles.permissionDescription}>
            For recording your health information
          </Text>
        </View>
      </View>
      <Text style={styles.permissionsText}>
        You can always adjust your permissions preferences in the settings.
      </Text>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          checked={selected}
          onPress={() => setSelected(!selected)}
          checkedColor="#ff6347"
        />
        <Text style={{marginVertical: 15, fontSize: 15, right: 15,color:'white'}}>
        Accept All The Terms and Conditions
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonView} onPress={agreeTerms}>
          <Text style={styles.text}>Agree</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonView1} onPress={back}>
          <Text style={styles.text}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Termsandconditions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 30,
    paddingTop: '5%',
    margin: '5%',
    color: '#F5F5F5',
  },
  condition: {
    color: 'white',
    fontSize: 15,
    margin: 20,
  },
  permissionsText: {
    color: 'gray',
    padding: 20,
    fontSize: 12,
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '10%',
    marginVertical: '4%',
  },
  icon: {
    marginRight: 10,
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 100,
  },
  permissionTitle: {
    color: 'white',
    fontSize: 15,
  },
  permissionDescription: {
    color: 'gray',
  },
  buttonView: {
    backgroundColor: '#ff6347',
    borderRadius: 30,
    padding: 10,
    width: '80%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#F5F5F5',
  },
  buttonView1: {
    backgroundColor: '#1A1A1A',
    borderRadius: 30,
    padding: 10,
    width: '80%',
    marginTop: 20,
  },
});
