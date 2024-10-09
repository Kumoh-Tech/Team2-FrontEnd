import React, { useState, useEffect } from 'react';
import useStore from '../store/store.js';
import { addPost, getPost, updatePost } from '../apis/post';
import { useNavigate, useParams } from 'react-router-dom';

function PostWrite() {
    const { user } = useStore();
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 서버에서 게시글을 가져온다. (수정 페이지로 쓰이는 경우에만 해당)
    useEffect(() => {
        if (id) {
            const fetchPost = async (i) => {
                const data = await getPost(i);
                setTitle(data.title);
                setContent(data.content);
            };
            fetchPost(id);
        }
    }, [id]);

    // 수정 페이지라면 PUT 요청, 새 게시글 작성 페이지라면 POST 요청
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            try {
                await updatePost(id, { title, content });
            } catch (error) {
                console.error('Error updating post:', error);
            }
            navigate(`/post/${id}`);
        } else {
            try {
                await addPost({ title, content, author: user.userInfo.displayname });
            } catch (error) {
                console.error('Error adding post:', error);
            }
            navigate('/');
        }
    };

    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>내용</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="primary-btn">작성</button>
            </form>
        </div>
    );
}

export default PostWrite;
