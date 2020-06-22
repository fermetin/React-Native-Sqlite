import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'


const HomeScreen = () => {
    //List all places the user have
    const allPlaces = useSelector(state => state.places.userPlaces)


    const renderPlaceItem = (item) => {
        return (
            <TouchableOpacity key={item.id}>
                <View >
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container} >
            <FlatList
                data={allPlaces}
                keyExtractor={(item,index) => item.id + index}
                renderItem={({ item }) => renderPlaceItem(item)}
            />
            <Text> HomeScreen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default HomeScreen