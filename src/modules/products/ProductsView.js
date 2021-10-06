import React from 'react';
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
//import { Text } from '../../components/StyledText';
import { SearchBar } from 'react-native-elements';
//import { Searchbar } from 'react-native-paper';
//https://callstack.github.io/react-native-paper/getting-started.html
// import { useState, useEffect } from 'react';
import { useState, useEffect, useCallback } from 'react';
import Accordian from './Accordian';
import { useSelector, useDispatch } from 'react-redux';

import {
  gql,
  useQuery
} from '@apollo/client';

const GET_ALL_CATEGORIES = gql`
                    query{
                      allCategories{
                        edges{
                          node{
                            catId
                            categoryName
                          }
                        }
                      }
                    }
    `;

const cleanGraphQLResponse = function(input) {
    if (!input) return null
    const output = {}
    const isObject = obj => {
      return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
    }

    Object.keys(input).forEach(key => {
      if (input[key] && input[key].edges) {
        output[key] = input[key].edges.map(edge =>
          cleanGraphQLResponse(edge.node)
        )
      } else if (isObject(input[key])) {
        output[key] = cleanGraphQLResponse(input[key])
      } else if (key !== '__typename') {
        output[key] = input[key]
      }
    })

    return output
  }


  const newArrayData = [

    {
       "category": "YMR",
       "cat_id": "1",
       "data": [
           	{"product_name": "yellow boti", "type": "1 Kg", "unit_price": "100 Rs", "item_code": "1001", "id": "1001"},
    	    {"product_name": "yellow boti", "type": "10 Kg", "unit_price": "100 Rs", "item_code": "1002", "id": "1002"},
    	   	{"product_name": "yellow boti", "type": "100 Kg", "unit_price": "100 Rs", "item_code": "1003", "id": "1003"}
    	]

    },

    {
       "category": "WPRD",
       "cat_id": "2",
       "data": [
           	{"product_name": "yellow boti", "type": "20 Kg", "unit_price": "100 Rs", "item_code": "1004", "id": "4"},
    	    {"product_name": "yellow boti", "type": "200 Kg", "unit_price": "100 Rs", "item_code": "1005", "id": "5"},
    	    {"product_name": "yellow boti", "type": "250 Kg", "unit_price": "100 Rs", "item_code": "1006", "id": "6"}
    	]

    },

    {
       "category": "PRD",
       "cat_id": "3",
       "data": [
           	{"product_name": "yellow boti", "type": "20 Kg", "unit_price": "100 Rs", "item_code": "1007", "id": "7"},
    	    {"product_name": "yellow boti", "type": "200 Kg", "unit_price": "100 Rs", "item_code": "1008", "id": "8"},
    	    {"product_name": "yellow boti", "type": "250 Kg", "unit_price": "100 Rs", "item_code": "1009", "id": "9"}
    	]

    },
    {
       "category": "CPD",
       "cat_id": "4",
       "data": [
          {"product_name": "yellow boti", "type": "20 Kg", "unit_price": "100 Rs", "item_code": "1010", "id": "10"},
    	    {"product_name": "yellow boti", "type": "200 Kg", "unit_price": "100 Rs", "item_code": "1011", "id": "11"},
    	    {"product_name": "yellow boti", "type": "250 Kg", "unit_price": "100 Rs", "item_code": "1012", "id": "12"}
    	]

    }


 ]


export default function ProductsScreen({ isExtended, setIsExtended }) {
    console.log("I am in products screen - printing messages for debugging; ----------------->>>>>>>>>>>>>>>>>>>");
    console.log(data);
    const [categoriesList, setCategoriesList] = useState([]);
//    const [addProduct, setAddProduct] = useState([])
//    const [addedProducts, setAddedProducts] = useState([]);

    const { data, error, loading } = useQuery(GET_ALL_CATEGORIES);


    useEffect(() => {
        const getCategories = () => {
          if (error) {
            return console.log(error);
          }

          if (loading) {
            return console.log("LOADING =>", loading)
          }

          cleanData = cleanGraphQLResponse(data);

          console.log("I am in home view - START");

          console.log(cleanData.allCategories);
          var newArray = cleanData.allCategories;

          console.log("I am in home view - END");

          setCategoriesList(newArrayData);
          console.log("printing buyerslist array");
          console.log(categoriesList);
        };
        getCategories();
          }, [data]);



      state = {
        search: '',
      };

      updateSearch = (search) => {
        this.setState({ search });
      };

    const { search } = this.state;

    renderAccordians=()=> {
        const items = [];
        for (item of categoriesList) {
            items.push(
                <Accordian
                    title = {item.category}
                    data = {item.data}
                    key = {item.cat_id}
                />
            );
        }
        return items;
    }

 const RESET_CART = 'RESET';

 const resetCart = () => {
    console.log("resetting the cart");
    return { 
        type: RESET_CART, 
    };
};

const dispatch = useDispatch();
 
  const resetHandler = useCallback(() => {
    dispatch(resetCart());
    console.log(state.cart);
  }, [dispatch]);

      return (
                  <View style={styles.container}>
                  <View>
                    { this.renderAccordians() }
                  </View>
                      <Button title = "Press me" onPress = {resetHandler}/>
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