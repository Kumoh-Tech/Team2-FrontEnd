import React, { useState, useEffect } from 'react';
import useStore from '../store/store.js';
import { getPosts } from '../apis/api';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useStore();

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
        {
          user.isLoggedIn ?
            <Link to='/write' className="primary-btn">글쓰기</Link> :
            <p>로그인 후 글을 작성하실 수 있습니다.</p>
        }

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
