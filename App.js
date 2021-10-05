import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';
//import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {
  ApolloClient,
  ApolloProvider,
  gql,
  NormalizedCacheObject,
  useQuery
} from '@apollo/client';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Avatar, Input } from '@ui-kitten/components'
//import { QueryClient, QueryClientProvider } from "react-query";

//import { gql } from '@apollo/client'
//import { cache } from 'react-native-cache';

//const restLink = new RestLink({
//  uri: 'https://min-api.cryptocompare.com',
//  headers: {
//    Authorization:
//      'd251970548f7321b548d3fb61d58c1a456974ea02ba41437fc9bf711f4e89782'
//  }
//})

const cache = new InMemoryCache()

//export const client = new ApolloClient({
//  cache,
//  uri: 'http://127.0.0.1:5000/graphql-api',
//});

export const client = new ApolloClient({
  cache,
  uri: 'https://87d7-27-5-241-41.ngrok.io/graphql-api',
});





export default function App() {
//const listData1 = useQuery(GET_ALL_USERS);
//console.log(listData1)
  return (
  <ApplicationProvider {...eva} theme={eva.light}>
    <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate
          loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={styles.container}>
              <ActivityIndicator color={colors.red} />
            </View>
          }
          persistor={persistor}
        >
          <AppView />
        </PersistGate>
      </NavigationContainer>
    </Provider>
    </ApolloProvider>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
