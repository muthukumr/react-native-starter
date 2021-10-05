import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableHighlight } from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import NumericInput,{ calcSize } from 'react-native-numeric-input';
import { useState, useEffect } from 'react';

var quantity = 0;
export default class NumInput extends Component{
    constructor(props) {
        super(props);
    }

    render() {
    return(
        <View>
                <NumericInput 
                value={this.state.value}
                onChange={value => { this.setState({value}); quantity = value; console.log("value is ", quantity);}}
                totalWidth={130}
                totalHeight={30}
                iconSize={15}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#F7007C'
                leftButtonBackgroundColor='#B1001D'/>
        </View>
    )
    }

}
