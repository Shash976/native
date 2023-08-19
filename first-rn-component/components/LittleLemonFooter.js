import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter(){
    return(
        <View
            style={{
                width:"100%",
                position:'absolute',
                bottom:"1%",
                backgroundColor: '#F4CE14'
            }}>
            <Text
                style={{fontWeight:'bold', color:'black', textAlign: 'center'}}>
            All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    )
}