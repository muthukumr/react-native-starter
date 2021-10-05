import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';

//import client from '../../../App';

import { fonts, colors } from '../../styles';
//import { Text } from '../../components/StyledText';
import { SearchBar } from 'react-native-elements';
//import { Searchbar } from 'react-native-paper';
//https://callstack.github.io/react-native-paper/getting-started.html
import { useState, useEffect } from 'react';
import filter from 'lodash.filter'
import { ApplicationProvider, Avatar, Input } from '@ui-kitten/components'


import {
  gql,
  useQuery
} from '@apollo/client';
import SearchComponent from './SearchComponent';
//import HttpExample from './http_example';
//import GqlExample from './gql_example';



const GET_ALL_BUYERS = gql`
                    query{
                      allBuyers{
                        edges{
                          node{
                            bId
                            bName
                            bAddress
                            bEmail
                            bPhone
                            bTinNo
                            bCstNo
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


//const data = [
//  { id: '1', title: 'First item' },
//  { id: '2', title: 'Second item' },
//  { id: '3', title: 'Third item' },
//  { id: '4', title: 'Fourth item' }
//];




export default function HomeScreen({ isExtended, setIsExtended }) {
    console.log("I am in home screen - printing messages for debugging; ----------------->>>>>>>>>>>>>>>>>>>");
    console.log(data);
    const [buyersList, setBuyersList] = useState([]);
    const { data, error, loading } = useQuery(GET_ALL_BUYERS);

    useEffect(() => {
        const getBuyers = () => {
          if (error) {
            return console.log(error);
          }

          if (loading) {
            return console.log("LOADING =>", loading)
          }

          cleanData = cleanGraphQLResponse(data);

          console.log("I am in home view - START");

          console.log(cleanData.allBuyers);
          var newArray = cleanData.allBuyers;

          console.log("I am in home view - END");

          setBuyersList(newArray);
          console.log("printing buyerslist array");
          console.log(buyersList);
        };
        getBuyers();
          }, [data]);



    state = {
      // add the following
      query: '',
      fullData: []
    }

    makeRemoteRequest = () => {
      const { page, seed } = this.state
      const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
      this.setState({ loading: true })

      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,

            // ---- ADD THIS ----
            fullData: res.results
          })
        })
        .catch(error => {
          this.setState({ error, loading: false })
        })
    }

    handleSearch = text => {
      const formattedQuery = text.toLowerCase()
      const data = filter(this.state.fullData, user => {
        return this.contains(user, formattedQuery)
      })
      this.setState({ data, query: text })
    }

    contains = ({ name, email }, query) => {
      const { first, last } = name
      if (first.includes(query) || last.includes(query) || email.includes(query)) {
        return true
      }
      return false
    }

    renderHeader = () => (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.handleSearch}
          status='info'
          placeholder='Search Customers'
          style={{
            borderRadius: 25,
            borderColor: '#333',
            backgroundColor: '#fff'
          }}
          textStyle={{ color: '#000' }}
        />
      </View>
    )

      updateSearch = (search) => {
        this.setState({ search });
      };

    const { search } = this.state;
      return (
            <View style={styles.container}>
                  <FlatList
                    ListHeaderComponent={this.renderHeader}
                    keyExtractor={item => item.bName}
                    data={buyersList}
                    renderItem={({ item }) => (
                      <View style={styles.listItem}>
                        <Text style={styles.listItemText}>{item.bName}{"\n"}{item.bAddress}{"\n"}{item.bEmail}
                        </Text>
                        <Text style={styles.listItemText}>{item.bPhone}{"\n"}
                        </Text>
                      </View>
                    )}
                  />
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
    paddingHorizontal: 80,
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

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'space-around',
//  },
//  bgImage: {
//    flex: 1,
//    marginHorizontal: -20,
//  },
//  section: {
//    flex: 1,
//    paddingHorizontal: 20,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  sectionLarge: {
//    flex: 2,
//    justifyContent: 'space-around',
//  },
//  sectionHeader: {
//    marginBottom: 8,
//  },
//  priceContainer: {
//    alignItems: 'center',
//  },
//  description: {
//    padding: 15,
//    lineHeight: 25,
//  },
//  titleDescription: {
//    color: '#19e7f7',
//    textAlign: 'center',
//    fontFamily: fonts.primaryRegular,
//    fontSize: 15,
//  },
//  title: {
//    marginTop: 30,
//  },
//  price: {
//    marginBottom: 5,
//  },
//  priceLink: {
//    borderBottomWidth: 1,
//    borderBottomColor: colors.primary,
//  },
//});
