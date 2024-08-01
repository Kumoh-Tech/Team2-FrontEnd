import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, delPost } from '../apis/api';

function Post() {
    const { id } = useParams()
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    // 서버에서 게시글을 가져온다. (SELECT * from post where id = i)
    useEffect(() => {
        const fetchPost = async (i) => {
            const data = await getPost(i);
            setPost(data);
        };
        fetchPost(id);
    }, []);

    const handleDel = async (i) => {
        try {
            await delPost(i);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
        navigate('/');
    };

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => navigate(`/edit/${post.id}`)}>✏️</button>
            <button onClick={() => handleDel(post.id)}>🗑️</button>
        </div>
    )
}

export default Post