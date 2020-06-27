import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { Images } from '../../constants/Images'

const Place = ({ item }) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContiner} >
                <Image
                    source={{uri : item.imgUrl}}
                    style={styles.imageStyle}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.infContainer} >
                <TouchableOpacity activeOpacity={0.6} onPress={()=>console.log(item.id)} onLongPress={()=>console.log("long press test")} >
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerStyle} lineBreakMode="tail" >{item.name.toUpperCase()}</Text>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.adressTextStyle} lineBreakMode="middle" >{item.adress}</Text>
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
        height:140,
        margin:15,
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
    imageContiner: {
            //img cont
        },
    imageStyle: {
        width: 140,
        height: 139,
        borderRadius:70
    },
    infContainer: {
        width:"90%",
        
    },
    headerContainer: {
        marginStart:15,
        paddingTop:15,
    },
    headerStyle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    addressContainer: {
        height:87,
        width:'80%',
        marginHorizontal:15
    },
    adressTextStyle: {
        fontSize: 22,

    }
});

export default Place