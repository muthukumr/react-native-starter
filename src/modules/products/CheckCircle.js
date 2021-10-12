import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableHighlight } from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import NumericInput,{ calcSize } from 'react-native-numeric-input';
import { useState, useEffect, useCallback, useContext } from 'react';
import Order from '../../models/order';
import { useSelector, useDispatch } from 'react-redux';
import OrderContext from '../../store/context/order';


export default function CheckCircle(props){

    const avlCart = useSelector(state => state.products.cart);
    console.log("available cart is --------------------------------------------->>>", avlCart);
    const[isChecked, SetIsChecked] = useState(props.checked);

     const dispatch = useDispatch();

    const ADD_TO_CART = 'ADD';
    const DELETE_FROM_CART = 'DELETE';
    const RESET = 'RESET';

    const id = props.id;
    const code = props.code;
    const name = props.name;
    const type = props.type;
    const rate = props.rate;
    const quantity = props.quantity;
    const amount = props.amount;

    const addToCart = (id) => {
        console.log("dispatcher called add order to cart !!!");
        return { 
            type: ADD_TO_CART, 
            id: id,
            code: code,
            name: name,
            ptype: type,
            rate: rate,
            quantity: quantity
        };
    };

 
  const onChangeHandler = () => {
      SetIsChecked(!isChecked);
      console.log("on change handler called")
    //  if(isChecked)
        addToOrder();
  }
  
  const order = useContext(OrderContext);

  const addToOrder = useCallback(() => {
      console.log("in dispatcher add to order....");
      const d = dispatch(addToCart(id, code, name, type, rate, quantity));
      console.log("TROUBLESHOOTING");
      
      console.log("PRINTING ORDER CONTEXT ...", order);
      // state.order.cart = d.cart;
      // console.log(state.order.cart);
      // console.log(d);
      console.log(state.cart);
    //   console.log("in dispatcher add to order....");
    //   console.log(d);
    //   console.log("order dispatched ", state);
  }, [dispatch, id, code, name, type, rate, quantity]);

//  const removeFromOrder = useCallback(() => {
//     dispatch(addToCart(id, quantity, amount));
//     console.log(state.cart);
//   }, [dispatch, id, quantity, amount]);


    return(
    <View>
    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={onChangeHandler} >
    <Icon key = { props.id } name={'check-circle'} size={24} color={ isChecked ? Colors.GREEN :  Colors.LIGHTGRAY } />
    </TouchableHighlight>
    </View>
    );

}

