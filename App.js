import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { palcesReducer } from './store/reducers/places'

import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigation/RootNavigator'



export default function App() {

  const rootReducers = combineReducers({
    places: palcesReducer
  })
  const store = createStore(rootReducers)
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
