import React, { useState, useEffect } from 'react'
import { Text,View,StyleSheet } from 'react-native'

import * as ImagePicker from 'expo-image-picker'


const AddPlaceScreen = ()=>{
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
          if (Constants.platform.ios) {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    return(
        <View>
            <Text>
            AddPlaceScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default AddPlaceScreen