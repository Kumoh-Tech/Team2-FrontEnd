import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 특정 게시글의 댓글을 가져온다. => SELECT * from comments where postId = ?
const getComment = async (postId) => {
    try {
        const result = await axios.get(`${API_BASE_URL}/comments/${postId}`);
        return result.data;
    } catch (error) {
        console.error('Error fetching comment:', error);
        return [];
    }
}

// 작성한 댓글을 서버 DB에 등록한다. => INSERT (content, postId) into comment
const addComment = async (comment) => {
    try {
        const result = await axios.post(`${API_BASE_URL}/comments`, comment);
        return result.data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
};

export { getComment, addComment };
