import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton, Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingPost, setEditingPost] = useState("");

  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  const handleEditPost = (index) => {
    setEditingIndex(index);
    setEditingPost(posts[index]);
  };

  const handleSaveEdit = () => {
    const updatedPosts = posts.map((post, index) => (index === editingIndex ? editingPost : post));
    setPosts(updatedPosts);
    setEditingIndex(null);
    setEditingPost("");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Write a new post..." value={newPost} onChange={(e) => setNewPost(e.target.value)} />
          <Button onClick={handleAddPost} colorScheme="teal">
            Add Post
          </Button>
        </HStack>
        <VStack spacing={4} width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%" display="flex" justifyContent="space-between" alignItems="center">
              {editingIndex === index ? (
                <HStack width="100%">
                  <Input value={editingPost} onChange={(e) => setEditingPost(e.target.value)} />
                  <Button onClick={handleSaveEdit} colorScheme="teal">
                    Save
                  </Button>
                </HStack>
              ) : (
                <>
                  <Text>{post}</Text>
                  <HStack>
                    <IconButton aria-label="Edit post" icon={<FaEdit />} onClick={() => handleEditPost(index)} />
                    <IconButton aria-label="Delete post" icon={<FaTrash />} onClick={() => handleDeletePost(index)} />
                  </HStack>
                </>
              )}
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
