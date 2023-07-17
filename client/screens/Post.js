import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery, gql } from '@apollo/client';
import { Card, Button, Portal, Modal, TextInput, Provider } from 'react-native-paper';

const GET_POSTS = gql`
query GetPosts {
  posts {
    id,
    name,
    title
  }
}
`;
const item = [
  {
    id: 1,
    name: 'Gana',
    title: 'good',
  },
  {
    id: 2,
    name: 'John',
    title: 'Nice job',
  },
];

export default function Post() {
  const [visible, setVisible] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedTitle, setEditedTitle] = useState('');

  const navigation =  useNavigation();
  const Press=()=> {
    navigation.navigate('Hi')
  }
  // const {data,loading, error} = useQuery(GET_POSTS)
  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }

  // if (error) {
  //   return <Text>Error: {error.message}</Text>;
  // }

  const showModal = (name, title) => {
    setEditedName(name); // Set the initial value of the name in the modal
    setEditedTitle(title); // Set the initial value of the title in the modal
    setVisible(true);
  };

  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.create}>
          <TouchableOpacity onPress={Press}>
            <Button mode="contained">Үүсгэх</Button>
          </TouchableOpacity>
        </View>
        {item.map((post) => (
          <Card key={post.id} style={styles.card}>
            <Card.Title
              title={post.name}
              subtitle={post.title}
              right={(props) => (
                <Button mode="contained" onPress={() => showModal(post.name, post.title)} style={styles.ed}>
                  Засах
                </Button>
              )}
            />
          </Card>
        ))}

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <TextInput
              label="Name"
              value={editedName}
              onChangeText={(text) => setEditedName(text)}
            />
            <TextInput
              label="Title"
              value={editedTitle}
              onChangeText={(text) => setEditedTitle(text)}
            />
            <Button mode="contained" onPress={hideModal}>
              Save
            </Button>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  create: {
    paddingBottom:20
  },
  card: {
    marginBottom: 20,
  },
  ed: {
    marginRight: 20
  }
});

