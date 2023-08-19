import * as React from 'react';
import { View,Text } from 'react-native';

export default function WelcomeScreen(){
    return(
        <View
            style={{
                backgroundColor:"pink",
                flex: 0.3
            }}>
                <Text
                    style={{
                        textAlign:"center",
                        fontSize:10,
                        color:'black'
                    }}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
                <Text
                    style={{
                        textAlign:"center",
                        fontWeight:"bold",
                        fontSize:30,
                        color:'black'
                    }}>
                Welcome to Little Lemon
                </Text>
        </View>
    )
}