//import React, { Component } from 'react'
//import { View, Text } from 'react-native'
//
//import {
//  gql,
//  useQuery
//} from '@apollo/client';
//
//import HttpExample from './http_example';
//
//
//
//const GET_ALL_BUYERS = gql`
//                query{
//                  allBuyers{
//                    edges{
//                      node{
//                        bName
//                      }
//                    }
//                  }
//                }
//    `;
//
//const cleanGraphQLResponse = function(input) {
//    if (!input) return null
//    const output = {}
//    const isObject = obj => {
//      return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
//    }
//
//    Object.keys(input).forEach(key => {
//      if (input[key] && input[key].edges) {
//        output[key] = input[key].edges.map(edge =>
//          cleanGraphQLResponse(edge.node)
//        )
//      } else if (isObject(input[key])) {
//        output[key] = cleanGraphQLResponse(input[key])
//      } else if (key !== '__typename') {
//        output[key] = input[key]
//      }
//    })
//
//    return output
//  }
//
//
//
//
//export default function GqlExample({ isExtended, setIsExtended }) {
////class GqlExample extends Component {
//   state = {
//      data: ''
//   }
//   componentDidMount = () => {
//               this.setState({
//      data: useQuery(GET_ALL_BUYERS)
//         })
//      .catch((error) => {
//         console.error(error);
//      });
//   }
////   render() {
//      return (
//         <View>
//            <Text>
//               {this.state.data.bName}
//            </Text>
//         </View>
//      )
////   }
//}
////export default GqlExample