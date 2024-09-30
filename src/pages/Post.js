import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, delPost, addComment } from '../apis/api';
import '../styles/Post.css';

function Post() {
    const { id: postId } = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('kim');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPost(postId);
            setPost(data);
        };
        fetchPost();
    }, [postId]);

    const handleDel = async (i) => {
        try {
            await delPost(i);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
        navigate('/');
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            await addComment({ postId, username, comment });
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <>
            <div className="post-page">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <div className="post-actions">
                    <button onClick={() => navigate(`/edit/${post.id}`)}>✏️</button>
                    <button onClick={() => handleDel(post.id)}>🗑️</button>
                </div>
            </div>
            <div style={{ backgroundColor: '#eee', padding: '10px' }}>
                댓글
                <form onSubmit={handleCommentSubmit}>
                    <input
                        type="text"
                        style={{
                            width: '80%',
                            padding: '10px',
                            borderRadius: '4px',
                            fontSize: '16px',
                        }}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Enter text"
                    />
                    <button type="submit" className="submit-button">작성</button>
                </form>
            </div>
        </>

    );
}

export default Post;
