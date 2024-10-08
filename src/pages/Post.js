import React, { useState, useEffect } from 'react';
import useStore from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, delPost, addComment, getComment } from '../apis/api';
import { Link } from 'react-router-dom';
import '../styles/Post.css';

function Post() {
    const { user } = useStore();
    const { id: postId } = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [newcomment, setNewComment] = useState('');
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
            await addComment({ postId, username: user.userInfo.displayname, content: newcomment });
            window.location.reload();
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <>
            <div className="box">
                <h3>{post.title}</h3>
                <p style={{ color: "#AAA" }}>{post.author}</p>
                <h4>{post.content}</h4>
                <div className="post-actions">
                    <Link to={`/edit/${post.id}`} className="primary-btn">수정</Link>
                    <Link onClick={() => handleDel(post.id)} className="primary-btn">삭제</Link>
                </div>
            </div>
            <div className='box'>
                <h3>댓글 {comment.length}개</h3>

                {
                    comment.map((item) => (
                        <div key={item.id} className='comment'>
                            <p><b>{item.username}</b></p>
                            <p>{item.content}</p>
                        </div>
                    ))
                }

                <div>
                    <form onSubmit={handleCommentSubmit}>

                        {
                            user.isLoggedIn ?
                                <>
                                    <input
                                        type="text"
                                        value={newcomment}
                                        placeholder='댓글을 입력하세요.'
                                        onChange={(e) => setNewComment(e.target.value)}
                                    />
                                    <button type="submit" className="primary-btn">작성</button>
                                </> :
                                <h4>댓글을 작성하려면 로그인하세요!</h4>
                        }

                    </form>
                </div>
            </div>
        </>
    );
}

export default Post;
