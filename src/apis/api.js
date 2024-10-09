import axios from 'axios';

// 백앤드 배포되면 URL 수정하기 (로컬호스트 말고 그쪽 앤드포인트로)

// 모든 게시글 목록을 다 가져온다.   => SELECT * from post
const getPosts = async () => {
    try {
        const result = await axios.get('http://localhost:8080/posts');
        return result.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// 특정 게시글을 하나 끄집어온다.   => SELECT * from post where id = i
const getPost = async (i) => {
    try {
        const result = await axios.get('http://localhost:8080/posts/' + i);
        return result.data;
    } catch (error) {
        console.error('Error fetching post:', error);
        return [];
    }
}

const getComment = async (postId) => {
    try {
        const result = await axios.get('http://localhost:8080/comments/' + postId);
        return result.data;
    } catch (error) {
        console.error('Error fetching comment:', error);
        return [];
    }
}

// 작성한 게시글을 서버 DB에 등록한다.   => INSERT (title, content) into post
const addPost = (post) => {
    try {
        const result = axios.post('http://localhost:8080/posts/', post);
        return result.data;
    } catch (error) {
        console.error('Error adding post:', error);
        throw error;
    }
};

// 특정 게시글을 삭제한다.   => DELETE from post where id = i
const delPost = (i) => {
    try {
        const result = axios.delete(`http://localhost:8080/posts/${i}`);
        return result.data;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}

// 특정 게시글을 수정한다.   => UPDATE post SET title = (edited title), content = (edited content) WHERE id = i
const updatePost = (i, data) => {
    try {
        const result = axios.put(`http://localhost:8080/posts/${i}`, data);
        return result.data;
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}

// 작성한 게시글을 서버 DB에 등록한다.   => INSERT (title, content) into post
const addComment = (comment) => {
    try {
        const result = axios.post('http://localhost:8080/comments', comment);
        return result.data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
};


export { getPosts, getPost, addPost, delPost, updatePost, addComment, getComment };