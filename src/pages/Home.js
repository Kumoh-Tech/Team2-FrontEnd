import React, { useState, useEffect } from 'react';
import { getPosts } from '../apis/api';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <h2>게시판</h2>
      <Link to='/write'>작성</Link>
      {
        posts.map((post, i) => (
          <div>
            <Link to={'/post/' + post.id}>{post.title}</Link>
            <br></br>
          </div>
        ))
      }
    </div>
  );
}

export default Home;