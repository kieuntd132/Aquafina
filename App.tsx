import { StyleSheet } from 'react-native'
import React from 'react'
// import Test from './src/presentation/container/Login/Test'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/presentation/navigation/StackNavigation'
import MyDrawer from './src/presentation/navigation/MyDrawer'


const App = () => {
  

  return (
    <NavigationContainer>
      <StackNavigation/>
      {/* <MyDrawer/> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})