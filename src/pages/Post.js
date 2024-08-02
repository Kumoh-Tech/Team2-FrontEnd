import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, delPost } from '../apis/api';
import '../styles/Post.css';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPost(id);
            setPost(data);
        };
        fetchPost();
    }, [id]);

    const handleDel = async (i) => {
        try {
            await delPost(i);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
        navigate('/');
    };

    return (
        <div className="post-page">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-actions">
                <button onClick={() => navigate(`/edit/${post.id}`)}>✏️</button>
                <button onClick={() => handleDel(post.id)}>🗑️</button>
            </div>
        </div>
    );
}

export default Post;
