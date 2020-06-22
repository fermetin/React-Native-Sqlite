import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Place from '../components/UI/Place'


const HomeScreen = () => {
    //List all places the user have
    const allPlaces = useSelector(state => state.places.userPlaces)

    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={allPlaces}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place item={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HomeScreen
/**
 *
 */