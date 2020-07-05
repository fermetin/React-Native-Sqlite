import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import { Images } from '../constants/Images'
import AddPlaceForm from '../components/AddPlaceForm'



const PlaceDetailsScreen = ({ navigation, route }) => {
    const [placeItem, setPlaceItem] = useState(route.params.item)
    const [editMode, seteditMode] = useState(false)
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])
    //details for each place
    return (
        <View style={styles.container} >
            <View style={{alignItems:'center',margin:30}}>
                <Text style={styles.header} >{placeItem.name}</Text>
            </View>
            <Image
                source={{ uri: placeItem.imgUrl }}
                style={styles.imgStyle} />
            <Button title="edit" onPress={() => seteditMode((prevState) => !prevState)} />
            {editMode &&
                <View style={styles.formcontainer} >
                    <AddPlaceForm />
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgStyle: {
        width: "100%",
        height: "25%",
        resizeMode: 'cover'
    },
    header: {
        fontSize: 20,
        fontWeight:'bold'
    },
    formcontainer: {


    }
});

export default PlaceDetailsScreen