import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

import {
    handleTextInput,
    withNextInputAutoFocusForm,
    withNextInputAutoFocusInput
} from 'react-native-formik'

import { TextField } from 'react-native-material-textfield'
import { Formik } from 'formik'
import * as yup from 'yup'
import { compose } from 'redux'


const AddPlaceForm = ({onSubmitHandler}) => {

    //compose right to left puting the argument each func(ARGUMENT IS TEXRFIELD)
    const MyInput = compose(
        handleTextInput,
        withNextInputAutoFocusInput)(TextField)

    let validationSchema = yup.object().shape({
        placename: yup.string().required("Required").max(18).min(4),
        adress : yup.string().required("Required").max(30).min(3),
        city: yup.string().required("Required"),
        description: yup.string().required("Required").min(5),
        note: yup.string().notRequired(true).max(30),
    })
    const Form = withNextInputAutoFocusForm(View);


    return (
        <Formik
            initialValues={{ placename: "", description: '', note: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitHandler(values)}
        >
            {props => {
                return (
                        <Form style={styles.formCont} >
                            <MyInput label="Place Name" name="placename" type="name" />
                            <MyInput label="Adress" name="adress" type="adress" />
                            <MyInput label="City" name="city" type="city" />
                            <MyInput label="Description" name="description" type="description" />
                            <MyInput label="Notes" name="note" type="note" />
                            <Button title="Submmit" color="red" onPress={() => props.handleSubmit()} />
                        </Form> 
                )
            }
            }
        </Formik>
    )
}

const styles = StyleSheet.create({
    formCont: {
        marginHorizontal: 30,
        marginTop: 10,
    }
});

export default AddPlaceForm;
