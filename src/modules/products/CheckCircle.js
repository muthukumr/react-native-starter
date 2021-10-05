import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableHighlight } from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import NumericInput,{ calcSize } from 'react-native-numeric-input';
import { useState, useEffect } from 'react';

export default function CheckCircle(props){
    const[isChecked, SetIsChecked] = useState(props.checked);

    const onChangeHandler = () => {
        SetIsChecked(!isChecked)
        // if(isChecked){
            props.addOrderItem(this.key)
        // }
        // else{
        //     props.deleteOrderItem(this.key)
        // }
    }

    return(
    <View>
    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={onChangeHandler} >
    <Icon name={'check-circle'} size={24} color={ isChecked ? Colors.GREEN :  Colors.LIGHTGRAY } />
    </TouchableHighlight>
    </View>
    );

}

