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

export default function TabTwoScreen() {
  const [loading, setLoading] = useState(false);
  

  const toggleLoading = () => {
    setLoading(!loading);
  };

  setTimeout(() => {
    setLoading(false);
    
  }, 3000);

  return (

    <ViewWithLoading loading={false}>

      
       <HeaderLottie/>
      <View style={{
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      justifyContent: 'center',
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
        placeholder="Email"
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
        borderRadius: 25,
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
        height: '15%',
        width: '30%',
        padding: 10,

        backgroundColor:'white'
        }}>
      <Button
      title={"Login"}

      />

        </View>
        <Footerlogin
        />
      
    <Text style={{
        color: 'black',
      margin: 20,
      textAlign: 'center'
      }}>--------------------------------------or--------------------------------------
      </Text>
     
    <View style={{
      height: '10%',
      width: '20%',
      backgroundColor: 'white',
      justifyContent: 'space-evenly',
      borderWidth:1,
      borderRadius: 25,
    }}>
       <Image  source={{uri: 'https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png'}}
       style = {{
         height: '90%',
         width: '100%',
         resizeMode: "contain"
       }}
       />
    </View>
    <Text style={{
        color: 'black',
      textAlign: 'center'
      }}> Continue With Facebook
      </Text>
      
      <View style={{
      height: '10%',
      width: '20%',
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 25,
    }}>
       <Image
       source={{uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'}}
       style = {{
         height: '75%',
         width: '100%',
         margin: 3,
         resizeMode: "contain"
       }}
       />
    </View>
    <Text style={{
        color: 'black',
      textAlign: 'center'
      }}> Continue With Google
      </Text>
    </View>
    </ViewWithLoading>
  );
}