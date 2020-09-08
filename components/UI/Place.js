import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, Animated } from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { Images } from '../../constants/Images'

const Place = ({ item, navigation}) => {
    
    const navigateDetailsScreen = () => {
        
        navigation.navigate("Place Details Screen", {
            item
        })
    }
    return (
        <TouchableHighlight
            style={styles.rowFront}
            underlayColor={'#AAA'}
            activeOpacity={1}
            onPress={navigateDetailsScreen}
            onLongPress={() => console.log("long press test")} >
            <View style={styles.container}>
                <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.imageStyle}
                    resizeMode='contain'
                />
                <View style={styles.infContainer} >
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerStyle} lineBreakMode="tail" >{item.name.toUpperCase()}</Text>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.adressTextStyle} lineBreakMode="middle" >{item.adress}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 140,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    rowFront: {
    },
    imageContiner: {
        //img cont
    },
    imageStyle: {
        width: 140,
        height: 139,
        borderRadius: 70
    },
    infContainer: {
        width: "90%",

    },
    headerContainer: {
        marginStart: 15,
        paddingTop: 15,
    },
    headerStyle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    addressContainer: {
        height: 87,
        width: '80%',
        marginHorizontal: 15
    },
    adressTextStyle: {
        fontSize: 22,

    }
});

export default Place