import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView, ActivityIndicator, Animated, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SwipeListView } from 'react-native-swipe-list-view'
import Place from '../components/UI/Place'
import { fetchAllPlaces } from '../store/actions/places-actions'

const openWidth = 100
const HomeScreen = ({ navigation }) => {
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

    const renderHiddenItem = () => (
        <View style={styles.rowBack}>
            <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                <Text style={styles.backTextWhite}>Delete</Text>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={styles.container} >
            <SwipeListView
                disableRightSwipe
                data={allPlaces}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <Place item={item} navigation={navigation} />
                }
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={openWidth}
                rightOpenValue={-openWidth}
                stopLeftSwipe={openWidth}
                stopRightSwipe={-openWidth}

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
    }, backTextWhite: {
        color: '#FFF',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
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