import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 모든 게시글 목록을 다 가져온다. => SELECT * from post
const getPosts = async () => {
    try {
        console.log(API_BASE_URL);
        const result = await axios.get(`${API_BASE_URL}/posts`);
        return result.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// 특정 게시글을 하나 끄집어온다. => SELECT * from post where id = i
const getPost = async (i) => {
    try {
        const result = await axios.get(`${API_BASE_URL}/posts/${i}`);
        return result.data;
    } catch (error) {
        console.error('Error fetching post:', error);
        return [];
    }
}

const getComment = async (postId) => {
    try {
        const result = await axios.get(`${API_BASE_URL}/comments/${postId}`);
        return result.data;
    } catch (error) {
        console.error('Error fetching comment:', error);
        return [];
    }
}

// 작성한 게시글을 서버 DB에 등록한다. => INSERT (title, content) into post
const addPost = async (post) => {
    try {
        const result = await axios.post(`${API_BASE_URL}/posts`, post);
        return result.data;
    } catch (error) {
        console.error('Error adding post:', error);
        throw error;
    }
};

// 특정 게시글을 삭제한다. => DELETE from post where id = i
const delPost = async (i) => {
    try {
        const result = await axios.delete(`${API_BASE_URL}/posts/${i}`);
        return result.data;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}

// 특정 게시글을 수정한다. => UPDATE post SET title = (edited title), content = (edited content) WHERE id = i
const updatePost = async (i, data) => {
    try {
        const result = await axios.put(`${API_BASE_URL}/posts/${i}`, data);
        return result.data;
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}

// 작성한 게시글을 서버 DB에 등록한다. => INSERT (title, content) into post
const addComment = async (comment) => {
    try {
        const result = await axios.post(`${API_BASE_URL}/comments`, comment);
        return result.data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
};

export { getPosts, getPost, addPost, delPost, updatePost, addComment, getComment };
