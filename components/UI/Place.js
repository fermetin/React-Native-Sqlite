import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Images } from '../../constants/Images'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'

const Place = ({ item }) => {
    const [image, setImage] = useState()
    const [defaultImage, setdefaultImage] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const image = defaultImage ? require('../../assets/foti.png') : (error ? require('../../assets/foti.png') : { uri: item.imageUrl })

        setImage(image)
    }, [image, defaultImage])

    return (
        <View style={styles.container}>
            <View style={styles.imageContiner} >
                <Image
                    source={image}
                    style={styles.imageStyle}
                    onLoadEnd={() => setdefaultImage(false)}
                    onError={() => setError(true)}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.infContainer} >
                <TouchableOpacity activeOpacity={0.6} >
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerStyle} >{item.name.toUpperCase()}</Text>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.adressTextStyle} >{item.adress}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContiner: {
        backgroundColor: 'black',
        margin: 20
    },
    imageStyle: {
        width: 100,
        height: 100
    },
    infContainer:{
        flex:1,
        alignItems:'center'
    },
    headerContainer:{
        flex:1,
    },
    headerStyle:{
        fontSize:28,
        fontWeight:'bold'
    },
    addressContainer:{

    },
    adressTextStyle:{
        fontSize:22,
    }
});

export default Place