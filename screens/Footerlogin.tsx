import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Colors, { commonColor } from "../constants/Colors";

export default function Footerlogin() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => navigation.navigate("Landing")}
            >
                <Text style={styles.textStyle}>Create Account</Text>
                </TouchableOpacity>
            </View>

    );
}

const styles = StyleSheet.create({
        container: {
            flex: 0,
            marginVertical: 20,
            alignItems: 'center'
        },
        textStyle:{
            color:commonColor.main,
            textDecorationLine: 'underline'

        }

})