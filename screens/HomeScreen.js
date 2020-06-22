import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  Place  from '../components/UI/Place'


const HomeScreen = () => {
    //List all places the user have
    const allPlaces = useSelector(state => state.places.userPlaces)


   
    return (
        <View style={styles.container} >
            <FlatList
                data={allPlaces}
                keyExtractor={(item,index) => item.id + index}
                renderItem={({ item }) => <Place item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HomeScreen