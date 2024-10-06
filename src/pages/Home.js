import React, { useState, useEffect } from 'react';
import { getPosts } from '../apis/api';
import { Link } from 'react-router-dom';

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

      <div className="flex-container">
        <h2>자유게시판</h2>
        <div style={{ flexGrow: '1' }}></div>
        <Link to='/write' className="primary-btn">글쓰기</Link>
      </div>

      <div>
        {posts.map((post, i) => (

          <Link to={`/post/${post.id}`}>
            <div className="box post" key={i}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
