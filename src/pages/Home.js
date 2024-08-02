import React, { useState, useEffect } from 'react';
import { getPosts } from '../apis/api';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h2>게시판</h2>
      <Link to='/write' className="write-link">작성</Link>
      <div className="post-list">
        {posts.map((post, i) => (
          <div className="post" key={i}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-actions">
              <Link to={`/post/${post.id}`} className="view-link">보기</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
