import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../apis/api';

function Post() {
    const { id } = useParams()
    const [post, setPost] = useState({});

    // 서버에서 게시글을 가져온다. (SELECT * from post where id = i)
    useEffect(() => {
        const fetchPost = async (i) => {
            const data = await getPost(i);
            setPost(data);
        };
        fetchPost(id);
    }, []);

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
}

export default Post