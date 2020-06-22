import React from 'react'
import { Button ,Text, View, StyleSheet } from 'react-native'

const FullSizeMapScreen = ({ navigation, route }) => {
    //details for each place
    
    return (
        <View style={{flex:1}} >
                <Button  title="denee" onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default FullSizeMapScreen