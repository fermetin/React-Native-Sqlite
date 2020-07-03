import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Images } from '../constants/Images'



const PlaceDetailsScreen = ({ navigation, route }) => {
    const [placeItem, setPlaceItem] = useState(route.params.item)
    console.log(navigation)
    useEffect(() => {

    }, [])
    //details for each place
    return (
        <View style={styles.container} >
            <Image
                source={{ uri: placeItem.imgUrl }}
                style={styles.imgStyle} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imgStyle: {
        width: "100%",
        height: "100%",
        resizeMode:'contain'
    }
});

export default PlaceDetailsScreen