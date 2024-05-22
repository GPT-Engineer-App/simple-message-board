import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

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
              <Text>{post}</Text>
              <IconButton aria-label="Delete post" icon={<FaTrash />} onClick={() => handleDeletePost(index)} />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
