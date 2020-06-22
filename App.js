import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigation/RootNavigator';
import { palcesReducer } from './store/reducers/places';

export default function App() {

  const rootReducers = combineReducers({
    places : palcesReducer
  })
  const store = createStore(rootReducers)
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
