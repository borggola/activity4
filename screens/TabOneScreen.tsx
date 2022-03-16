import { useState } from 'react';
import { Image, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import {CustomText} from "../components/StyledText";


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ViewWithLoading from "../components/ViewWithLoading";
import LottieView from 'lottie-react-native'
import HeaderLottie from './HeaderLottie';
import Footerlogin from './Footerlogin';
import FooterForgotpass from './FooterForgotpass';
import HeaderLottie2 from './HeaderLottie2';

export default function TabOneScreen() {
  const [loading, setLoading] =useState(false);
  const toggleLoading = () => {
    setLoading(!loading);
  };
  setTimeout(() => {
    setLoading(false);
    
  }, 3000);

  return (

    <ViewWithLoading loading={loading}>

      
      <HeaderLottie2/>
      <View style={{
      flex: 1,
      backgroundColor: '#FFFFFF',
      padding: 10,
      alignItems: 'center',
     flexDirection: 'column'

      
    }}>
      <View style ={{
        height: '10%',
        width: '80%',
        borderWidth:1,
        borderRadius: 25,
        padding: 10,
        backgroundColor:'white'
        }}>
      <TextInput
        placeholder="First Name"
        />
        </View>
        <View style={{
      height: '2%',
      width: '30%',
      backgroundColor: '#FFFFFFC0',
    }}></View>
    <View style ={{
        height: '10%',
        width: '80%',
        borderWidth:1,
        borderRadius: 25,
        padding: 10,
        backgroundColor:'white'
        }}>
      <TextInput
        placeholder="Last Name"
        />
        </View>
        <View style={{
      height: '2%',
      width: '30%',
      backgroundColor: '#FFFFFFC0',
    }}></View>
      <View style ={{
        height: '10%',
        width: '80%',
        borderWidth:1,
        borderRadius: 25,
        padding: 10,
        backgroundColor:'white'
        }}>
      <TextInput
        placeholder="Email Address"
        />
        </View>
        <View style={{
      height: '2%',
      width: '30%',
      backgroundColor: '#FFFFFFC0',
    }}>
    </View>
        <View style ={{
        height: '10%',
        width: '80%',
        padding: 10,
        borderWidth:1,
        borderRadius: 30,
        backgroundColor:'white'
        }}>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        />
        </View>
        <View style={{
      height: '2%',
      width: '30%',
      backgroundColor: '#FFFFFFC0',
    }}>
      
    </View>
    <View style ={{
        height: '10%',
        width: '80%',
        padding: 10,
        borderWidth:1,
        borderRadius: 30,
        backgroundColor:'white'
        }}>
      <TextInput
        placeholder="Retype Password"
        secureTextEntry={true}
        />
        </View>
        <View style ={{
        padding: 10,

        backgroundColor:'white'
        }}>
        <TouchableOpacity onPress={toggleLoading}>
          <View style={{
        height: '48%',
        width: '100%',
        padding: 10,
        borderWidth:1,
        borderRadius: 50,
        backgroundColor:'gray'
        }}>
          <CustomText>Register</CustomText>
          </View>
        </TouchableOpacity>
        </View>
      
    </View>
    </ViewWithLoading>
  );
}