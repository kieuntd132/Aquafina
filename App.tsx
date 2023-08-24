import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
// import Test from './src/presentation/container/Login/Test'
import FooterMenu from './src/presentation/component/footer/FooterMenu'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/presentation/navigation/StackNavigation'
import DrawerNavigation from './src/presentation/navigation/DrawerNavigation'


const App = () => {

  return (
    <NavigationContainer>
      {/* <StackNavigation/> */}
      <DrawerNavigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})