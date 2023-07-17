import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

// import client from './apollo';
import client from './apollo';
//import your screen from
import Post from './screens/Post';
import Hi from './screens/Hi';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Post' >
        <Stack.Screen name='Post' component={Post} options={{headerShown: false}} />
        <Stack.Screen name='Hi' component={Hi} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  )
}

export default App