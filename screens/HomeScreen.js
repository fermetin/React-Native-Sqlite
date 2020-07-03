import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Place from '../components/UI/Place'
import { fetchAllPlaces } from '../store/actions/places-actions'

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [loading, setloading] = useState(true)
    //List all places the user have
    const allPlaces = useSelector(state => state.places.userPlaces)
    
    const loadingPlaces = useCallback(async () => {

        try {

            await dispatch(fetchAllPlaces())

        } catch (error) {
            console.log(error)
        }
    }, [dispatch])
    
    useEffect(() => {

        navigation.addListener('focus',loadingPlaces)
    
    }, [loadingPlaces])

    useEffect(() => {
        setloading(true)

        loadingPlaces().then(() => {
            setloading(false)
        }).catch((err) => { console.log(err) })

    }, [loadingPlaces])

    if (loading) {
        return (
            <View style={styles.middlestaff} >
                <ActivityIndicator size={100} color='red' />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={allPlaces}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place item={item} navigation={navigation} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    middlestaff: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen
/**
 *
 */