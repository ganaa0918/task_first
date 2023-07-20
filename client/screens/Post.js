import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Card, Button, Portal, Modal, TextInput, Text, PaperProvider, } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

const GET_POSTS = gql`
  query allPosts {
    posts {
      count
      data {
        id
        title
        content
      }
    }
  }
`;

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $name: String!, $title: String!) {
    updatePost(id: $id, name: $name, title: $title) {
      id
      name
      title
    }s
  }
`;

const item = [
  {
    id: 1,
    content: 'Gana',
    title: 'good',
  },
  {
    id: 2,
    content: 'John',
    title: 'Nice job',
  },
];
export default function Post() {
  const [visible, setVisible] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [postId, setPostId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const navigation = useNavigation();
  const Press = () => {
    navigation.navigate('Hi');
  };

  const { data, loading, error } = useQuery(GET_POSTS);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const filteredPosts = data?.posts?.data?.filter((post) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower)
    );
  });

  const showModal = (id, content, title) => {
    setPostId(id);
    setEditedName(content); // Set the initial value of the name in the modal
    setEditedTitle(title); // Set the initial value of the title in the modal
    setVisible(true);
  };

  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <PaperProvider >
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.create}>
            <TouchableOpacity onPress={Press}>
              <Button mode="contained">Үүсгэх</Button>
            </TouchableOpacity>
          </View>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            // value={searchQuery}
          />
          {filteredPosts.map((post) => (
            <Card key={post.id} style={styles.card}>
              <Card.Title
                title={post.content}
                subtitle={post.title}
                right={(props) => (
                  <Button
                    mode="contained"
                    onPress={() => showModal(post.id, post.content, post.title)}
                    style={styles.ed}
                  >
                    Засах
                  </Button>
                )}
              />
            </Card>
          ))}
        </ScrollView>

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <TextInput
              label="content"
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
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    marginTop: 30,
  },
  create: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
  ed: {
    marginRight: 20,
  },
});
