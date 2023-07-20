import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert, TextInputComponent } from 'react-native'
import { TextInput, Button, Text} from 'react-native-paper'
import { Formik, Field } from 'formik'
import { CREATE_POST } from '../graphql/createPost'
const Create_Post = () => {
  const [createPost, { loading, error }] = useMutation(CREATE_POST);
  if (loading) return <Text>Submitting...</Text>; // Wrap the text in a Text component
  if (error) return <Text>Submission error! {error.message}</Text>; // Wrap the text in a Text component

  return (
    <Formik
      initialValues={{ content: '', title: '', authorEmail: '' }}
      onSubmit={(values) => {
        createPost({
          variables: {
            data: {
              title: values.title,
              content: values.content,
            },
            authorEmail: values.authorEmail,
          },
        })
          .then((res) => {
            console.log(res);
            Alert.alert('Success', 'Post created successfully!');
          })
          .catch((error) => {
            console.log(error);
            Alert.alert('Error', 'Failed to create post.');
          });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            label="title"
            value={values.title}
            autoCapitalize='none'
            onBlur={handleBlur('title')}
            onChangeText={handleChange('title')}
          />

          <TextInput
            label="Content"
            value={values.content}
            autoCapitalize='none'
            onBlur={handleBlur('content')}
            onChangeText={handleChange('content')}
          />

          <TextInput
            label="email"
            value={values.authorEmail}
            autoComplete='email'
            autoCapitalize='none'
            onBlur={handleBlur('authorEmail')}
            onChangeText={handleChange('authorEmail')}
          />

          <TouchableOpacity >
            <Button mode="contained" style={styles.btn} onPress={handleSubmit} >
              Submit
            </Button>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text1: {
    marginBottom: 20
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 40
  }
})
export default Create_Post