import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableHighlight } from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import NumericInput,{ calcSize } from 'react-native-numeric-input';
import { useState, useEffect, useCallback } from 'react';
import { Quantity } from '../../models/quantity';
import addValueToStore from '../../store/actions/products';
import { useSelector, useDispatch } from 'react-redux';
// import PRODUCTS from '../../store/actions/products';
// import toggleGreen from '../../store/actions/products';

var quantity = 0;

export default function NumInput(props) {
    const id = props.id;
    console.log("inside num input");
    const dispatch = useDispatch();

 const TOGGLE_GREEN = 'TOGGLE_GREEN';
 const TOGGLE_GREY = 'TOGGLE_GREY';
 const ADD_VALUE_TO_STORE = 'ADD_VALUE_TO_STORE';

 const toggleGreen = (id) => {
    console.log("dispatcher called toggleGreen !!!");
    return { 
        type: TOGGLE_GREEN, 
        productId: id,
        quantity: quantity 
    };
};

 const toggleReset = (id) => {
    console.log("dispatcher called toggleReset !!!");
    return { 
        type: TOGGLE_GREY, 
        productId: id 
    };
};

 const addValueToStore = (id, value) => {
    console.log("dispatcher called addValueToStore !!!");
    return { 
        type: ADD_VALUE_TO_STORE, 
        id: id,
        value: value, 
    };
};
 
  const toggleGreenHandler = useCallback(() => {
    dispatch(toggleGreen(id, quantity));
    console.log(state.cart);
  }, [dispatch, id, quantity]);

//   console.log(toggleGreenHandler);

 const [value, setValue] = useState(0);
    return(
        <View>
                <NumericInput 
                key = {props.id}
                value={value}
                onChange={value => { setValue({value}); quantity = value; console.log("key is ", quantity); toggleGreenHandler(); }}
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
