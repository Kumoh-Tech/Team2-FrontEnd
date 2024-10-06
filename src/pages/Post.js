import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, delPost, addComment, getComment } from '../apis/api';
import '../styles/Post.css';

function Post() {
    const { id: postId } = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [newcomment, setNewComment] = useState('');
    const [username, setUsername] = useState('kim');
    const navigate = useNavigate();

    // 현재 URL에 들어있는 ID에 대한 게시글과 댓글들을 가져온다.
    const fetchPost = async () => {
        const data = await getPost(postId);
        setPost(data);
    };

    const fetchComment = async () => {
        const data = await getComment(postId);
        setComment(data);
    };

    // 페이지가 로드될 때 게시물과 댓글을 한 번 가져온다.
    useEffect(() => {
        fetchPost();
        fetchComment();
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
            await addComment({ postId, username, content: newcomment });
            window.location.reload();
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
                <p>댓글</p>

                {
                    comment.map((item) => (
                        <div key={item.id} style={{ backgroundColor: 'white', border: '1px black solid' }}>
                            <p>{item.username}</p>
                            <p>{item.content}</p>
                        </div>
                    ))
                }

                <form onSubmit={handleCommentSubmit}>
                    <input
                        type="text"
                        value={newcomment} // 댓글 입력 상태를 input에 연결
                        style={{
                            width: '80%',
                            padding: '10px',
                            borderRadius: '4px',
                            fontSize: '16px',
                        }}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Enter text"
                    />
                    <button type="submit" className="submit-button">작성</button>
                </form>
            </div>
        </>
    );
}

export default Post;
