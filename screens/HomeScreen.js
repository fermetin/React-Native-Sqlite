import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView, ActivityIndicator, Animated, Dimensions, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SwipeListView } from 'react-native-swipe-list-view'
import Place from '../components/UI/Place'
import * as placesActions from '../store/actions/places-actions'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import TabBarIcon from '../components/Icons/TabBarIcon'
import { Ionicons } from '@expo/vector-icons'

const backButtonWidth = 40
const openWidth = backButtonWidth * 2

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setloading] = useState(true)
    //List all places the user have
    const allPlaces = useSelector(state => state.places.userPlaces)
    const loadingPlaces = useCallback(async () => {

        try {

            await dispatch(placesActions.fetchAllPlaces())

        } catch (error) {
            console.log(error)
        }
    }, [dispatch])

    useEffect(() => {

        navigation.addListener('focus', loadingPlaces)

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
    const deleteItemHandler = (item) => {
        //delete from redux & delete from db
        Alert.alert(
            `${item.name} gonna delete`,
            `You sure ?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        dispatch(placesActions.deletePlace(item.id))
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: false },
        );
    }
    
    const renderHiddenItem = ({ item }) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={styles.backRightBtn}
                onPress={() => deleteItemHandler(item)}
            >
                <Ionicons name="md-trash" color="white" size={50} />
            </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView style={styles.container} >
            <SwipeListView
                disableRightSwipe
                data={allPlaces}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <Place item={item} navigation={navigation}  />
                }
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={openWidth}
                rightOpenValue={-openWidth}
                closeOnScroll={true}
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
    },
    rowBack: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: "red",
        flexDirection: 'row',
        paddingHorizontal: 18,
    },
    backRightBtn: {
        alignItems: 'center',
        paddingEnd: 5
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
})

export default HomeScreen
/**
 *
 */