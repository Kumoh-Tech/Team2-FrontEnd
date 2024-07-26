import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { getPosts } from '../apis/api';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();      
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div>
      <h2>게시판</h2>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default Home;