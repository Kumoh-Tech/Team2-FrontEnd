import React, { useState, useEffect } from 'react';
import { addPost, getPost } from '../apis/api';
import { useNavigate, useParams } from 'react-router-dom';

function PostWrite() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 서버에서 게시글을 가져온다. (SELECT * from post where id = i)
    useEffect(() => {
        if (id) {
            const fetchPost = async (i) => {
                const data = await getPost(i);
                setTitle(data.title);
                setContent(data.content);
            };
            fetchPost(id);
        }
    }, []);

    // 디버깅용임 (삭제 예정)
    if (id) {
        console.log(`이곳은 ${id}번 게시글 수정 페이지`);
    } else {
        console.log('이곳은 새로운 게시글 작성페이지');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost({ title, content });
        } catch (error) {
            console.error('Error adding post:', error);
        }
        navigate('/');
    };

    return (
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
            <button type="submit">작성</button>
        </form>
    );
}

export default PostWrite;