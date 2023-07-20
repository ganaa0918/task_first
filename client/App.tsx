import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

// import client from './apollo';
import client from './apollo';
//import your screen from
import Post from './screens/Post';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Create_Post from './screens/Create';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />

          <Stack.Screen name='Post' component={Post} options={{ headerTitle: '' }} />
          <Stack.Screen name='Create' component={Create_Post} options={{headerTitle: 'Нийтлэл үүсгэх'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App