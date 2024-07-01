import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';
import { resetCache } from '../../metro.config';

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .required('Firstname is required')
    .min(8, ({min}) => `Firstname must contain ${min} characters`),
  lastname: Yup.string().required('Lastname is required'),
  mrn: Yup.string().required('MRN is required'),
  ssn: Yup.string()
    .required('SSN is required')
    .test('len', 'Must be exactly 9 characters', val => val.length === 9),
  email: Yup.string()
    .required('Email is required')
    .email('Please Enter Valid Email'),
  orgName: Yup.string()
    .required('Organization Name is required')
    .min(8, ({min}) => `Organization Name must contain ${min} characters`),
});
const Register = ({navigation}) => {
  // const [userDetails, setUserDetails] = useState({
  //   firstname: '',
  //   lastname: '',
  //   mrn: '',
  //   ssn: '',
  //   email: '',
  //   orgName: '',
  // });

  // const register = () => {
  //   console.log(userDetails);
  // };

  // const handleChange = (name, value) => {
  //   setUserDetails({...userDetails, [name]: value});
  // };

  const goback = () => {
    navigation.goBack();
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={{height: 200, backgroundColor: 'white'}}>
        <Icon
          name="arrow-back"
          color="white"
          style={{
            marginLeft: 20,
            top: 20,
            position: 'absolute',
            backgroundColor: 'tomato',
            height: 40,
            width: 40,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          size={20}
          onPress={goback}
        />
        <Image
          source={require('../images/signup.jpg')}
          style={{height: 180, width: 250, alignSelf: 'center'}}
        />
      </View>
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          borderTopLeftRadius: 150,
        }}>
        <Text
          style={{
            color: 'tomato',
            textAlign: 'center',
            margin: '10%',
            fontSize: 30,
            fontWeight: '600',
          }}>
          SignUp Here!
        </Text>
        <ScrollView contentContainerStyle={{alignSelf: 'center'}}>
          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              mrn: '',
              ssn: '',
              email: '',
              orgName: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values,{resetForm}) => {
              Alert.alert('Registered successgully');
              console.log('FormValues', values);
              resetForm();//default
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <TextInput
                  style={{
                    backgroundColor: 'grey',
                    height: 50,
                    width: 300,
                    borderRadius: 20,
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    fontSize: 15,
                  }}
                  placeholder="First Name"
                  value={values.firstname}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                />
                {errors.firstname && touched.firstname && (
                  <Text style={styles.errorText}>{errors.firstname}</Text>
                )}
                <TextInput
                  style={{
                    backgroundColor: 'grey',
                    height: 50,
                    width: 300,
                    borderRadius: 20,
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    fontSize: 15,
                  }}
                  placeholder="Last Name"
                  value={values.lastname}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                />
                {errors.lastname && touched.lastname && (
                  <Text style={styles.errorText}>{errors.lastname}</Text>
                )}
                <TextInput
                  style={{
                    backgroundColor: 'grey',
                    height: 50,
                    width: 300,
                    borderRadius: 20,
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    fontSize: 15,
                  }}
                  placeholder="MRN"
                  keyboardType="numeric"
                  value={values.mrn}
                  onChangeText={handleChange('mrn')}
                  onBlur={handleBlur('mrn')}
                />
                {errors.mrn && touched.mrn && (
                  <Text style={styles.errorText}>{errors.mrn}</Text>
                )}
                <TextInput
                  style={{
                    backgroundColor: 'grey',
                    height: 50,
                    width: 300,
                    borderRadius: 20,
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    fontSize: 15,
                  }}
                  placeholder="SSN"
                  keyboardType="numeric"
                  value={values.ssn}
                  onChangeText={handleChange('ssn')}
                  onBlur={handleBlur('ssn')}
                />
                {errors.ssn && touched.ssn && (
                  <Text style={styles.errorText}>{errors.ssn}</Text>
                )}
                <TextInput
                  style={{
                    backgroundColor: 'grey',
                    height: 50,
                    width: 300,
                    borderRadius: 20,
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    fontSize: 15,
                  }}
                  placeholder="Email@gmail.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <TextInput
                  style={{
                    backgroundColor: 'grey',
                    height: 50,
                    width: 300,
                    borderRadius: 20,
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    fontSize: 15,
                  }}
                  placeholder="Organization Name"
                  value={values.orgName}
                  onChangeText={handleChange('orgName')}
                  onBlur={handleBlur('orgName')}
                />
                {errors.orgName && touched.orgName && (
                  <Text style={styles.errorText}>{errors.orgName}</Text>
                )}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={[styles.buttonView1, !isValid && styles.buttonView]}
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    <Text style={styles.text}>Register</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#F5F5F5',
  },
  buttonView1: {
    backgroundColor: 'tomato',
    borderRadius: 30,
    padding: 10,
    width: '80%',
    marginTop: 20,
  },
  errorText: {color: 'red', fontSize: 12, textAlign: 'center'},
  buttonView: {
    backgroundColor: 'grey',
  },
});
