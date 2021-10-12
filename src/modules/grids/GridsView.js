import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Button
} from 'react-native';

//import client from '../../../App';

import { fonts, colors } from '../../styles';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect, useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableView from './TableView';

import OrderContext from '../../store/context/order';
import useGlobalState from '../../../App';
import productsReducer from '../../store/reducers/products';
// import Redux from 'redux';
// import { createStore } from 'redux';
import { connect } from 'react-redux';

// const OrderContext = React.createContext({
//   cart: [{"id": "1", "name":"amudhanayaki"}]
// });


function GridView(props) {
    console.log("I am in GRIDVIEW screen - printing messages for debugging; ----------------->>>>>>>>>>>>>>>>>>>");
    // const store = createStore(productsReducer);
    // console.log("STORE............. ", store);
    // console.log("STORE.GET_STATE............. ", store.getState());
    // store.subscribe(render);

    // function render(){
    //   console.log("Inside render function")
    //   const state = store.getState();
    //   console.log(state);
    //   console.log(state.products.cart);
    // }


    // const avlCart = useSelector(state => state.products.cart);
    // console.log("TROUBLESHOOTING: avlCart === ", avlCart);
    console.log("TROUBLESHOOTING: MAP_TO_PROPS_STATE CHANGE .... ", props.cart);

    
      return (
                  <View style={styles.container}>
                  <FlatList data={props.cart} keyExtractor={item => item.id} renderItem={itemData => <Text>ID = {itemData.item.id}, Qty = {itemData.item.quantity}, Amt = {itemData.item.amount}, Rate = {itemData.item.rate}</Text>} />
                  {/* <Text> {props.cart} </Text> */}
                  {/* <View>
                      <Button style={styles.title} title = "Order Value" onPress = {onPressHandler}/>
                  </View>
                  <View>
                      <Button title = "Summary" onPress = {onPressHandler}/>
                      
                  </View> */}
                  {/* <TableView/> */}
                  </View>
        );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 140,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  metaInfo: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10
  }
});

// GridView.propTypes = {
//   //for type checking
//     cart: PropTypes.object,
// };

const mapStateToProps = (state, ownProps) => {
      console.log("MAP_STATE_TO_PROPS");
      console.log("TYPE OF CART === ", typeof(state.products.cart));
      console.log(state.products.cart);
      return {
        cart: state.products.cart
      }
    }

export default connect(mapStateToProps)(GridView);