import React, { useState } from 'react';
import { addPost } from '../apis/api';

function PostWrite() {

    // 잘 되긴 하는데 방법이 좀 이상하다.. 최적화가 필요할 듯

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost({ title, content });
            setTitle('');
            setContent('');            
        } catch (error) {
            console.error('Error adding post:', error);
        }
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
