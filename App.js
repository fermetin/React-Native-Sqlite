import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'

import { Provider } from 'react-redux'
import { createStore, combineReducers ,applyMiddleware} from 'redux'
import  palcesReducer  from './store/reducers/places-reducer'

import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigation/RootNavigator'
import thunk from 'redux-thunk'
import { initDb } from './db/sqlitedb'

initDb()
  .then((val)=>{

  console.log('Db Initialize Succesfully',val)
})
  .catch((err)=>{
  
  console.log(err)
  console.log('Db Initialize Unsuccesfully!!!!!!')
  throw err
})


const rootReducers = combineReducers({
  
  places: palcesReducer

})

const store = createStore(rootReducers,applyMiddleware(thunk))

export default function App() {

  
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
