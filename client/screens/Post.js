import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Card, Button, Portal, Modal, TextInput, Text, PaperProvider, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

//import graphql queries
import { GET_POSTS } from '../graphql/getPost';
import { UPDATE_POST } from '../graphql/updatePst';

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
  const [editedContent, seteditedContent] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [postId, setPostId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [updatePost] = useMutation(UPDATE_POST);
  const icon = "<"

  const onPressback =()=>{
    navigation.goBack()
  }
  const handleUpdate = () => {
    updatePost({
      variables: {
        updatePostId: postId,
        data: {
          title: editedTitle,
          content: editedContent,
        },
      },
    })
      .then((res) => {
        // Handle the success response, if needed
        console.log('Post updated successfully!', res);
        hideModal();
      })
      .catch((error) => {
        // Handle the error, if needed
        console.error('Error updating post:', error);
      });
  };

  const navigation = useNavigation();
  const Press = () => {
    navigation.navigate('Create');
  };

  // const { data, loading, error } = useQuery(GET_POSTS, {
  //   fetchPolicy: 'no-cache'
  // });

  // if (loading) {
  //   return <ActivityIndicator animating={true} color={MD2Colors.red800} />;
  // }

  // if (error) {
  //   return <Text>Error: {error.message}</Text>;
  // }

  //   const filteredPosts = data?.posts?.data?.filter((post) => {
  //   const searchLower = searchQuery.toLowerCase();
  //   return (
  //     post.title.toLowerCase().includes(searchLower) ||
  //     post.content.toLowerCase().includes(searchLower)
  //   );
  // });
  const filteredPosts = item.filter((post) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower)
    );
  });
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const showModal = (id, content, title) => {
    setPostId(id);
    seteditedContent(content); // Set the initial value of the name in the modal
    setEditedTitle(title); // Set the initial value of the title in the modal
    setVisible(true);
  };

  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <PaperProvider >
      <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={onPressback}
        style={styles.roundButton1}>
        <Text>{icon}</Text>
      </TouchableOpacity>
          <View style={styles.create}>
            <TouchableOpacity onPress={Press} >
              <View style={styles.roundbtn}>
              <Text style={{fontSize: 30, color: 'white'}}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.togo}>
          <View style={styles.searchContainer}>
          <TextInput
            mode='outlined'
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
          />
          </View>
          {filteredPosts.map((post) => (
            <Card key={post.id} style={styles.card}>
              <Card.Title
                title={post.title}
                subtitle={post.content}
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
          </View>
        </ScrollView>

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <TextInput
              label="content"
              value={editedContent}
              onChangeText={(text) => seteditedContent(text)}
            />
            <TextInput
              label="Title"
              value={editedTitle}
              onChangeText={(text) => setEditedTitle(text)}
            />

            <Button mode="contained" onPress={updatePost}>
              Хадгалах
            </Button>
          </Modal>
        </Portal>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10
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
  roundButton1: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: '#CFCFCF',
    borderWidth: 0.5,
    position: 'absolute',
    left: 44,
    top: 48
  },

  roundbtn: {
    width: 75,
    height: 75  ,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    position: 'absolute',
    left: 275,
    top:600,
    backgroundColor:'#6B4FAA'
  },
  togo: {
    },
    searchContainer: {
      paddingHorizontal: 20,
      paddingBottom:20
    },
    
    search: {
      borderRadius: 20, // Set the desired border radius value here
    },
});
