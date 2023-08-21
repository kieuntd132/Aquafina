import { StyleSheet } from 'react-native'
import React from 'react'
// import Test from './src/presentation/container/Login/Test'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/presentation/container/Login/Login';
import Register from './src/presentation/container/Login/Register';
import ScreenOTP from './src/presentation/container/Login/ScreenOTP';
import NotificationOTP from './src/presentation/container/Login/NotificationOTP';
import StackNavigation from './src/presentation/navigation/StackNavigation';
const Stack = createNativeStackNavigator<StackNavigation>();

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ScreenOTP" component={ScreenOTP} />
            <Stack.Screen name="NotificationOTP" component={NotificationOTP} />
        </Stack.Navigator>
    </NavigationContainer>
  // <ScreenOTP/>
  )
}

export default App

const styles = StyleSheet.create({

})