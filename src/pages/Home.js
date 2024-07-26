import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import { getPosts } from '../apis/api';

function Home() {
  const [posts, setPosts] = useState([]);

  // 서버에서 게시글 목록을 가져온다. (SELECT * from post)
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
      {
        posts.map((post, i) => (
          <div key={i}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <br></br>
          </div>
        ))
      }
    </div>
  );
}

export default Home;