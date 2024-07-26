import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { getPosts } from '../apis/api';

function Home() {
  const [posts, setPosts] = useState([
    { title: '첫 번째 게시글', content: '안녕하세요, 첫 번째 게시글입니다.' },
    { title: '두 번째 게시글', content: '안녕하세요, 두 번째 게시글입니다.' },
  ]);

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