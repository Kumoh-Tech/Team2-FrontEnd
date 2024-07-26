import axios from 'axios';

// 백앤드 배포되면 URL 수정하기

// SELECT * from post
const getPosts = async () => {
    try {
        const result = await axios.get('http://localhost:8080/');
        return result.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// INSERT (title, content) into post
const addPost = async (post) => {
    try {
        const result = await axios.post('http://localhost:8080/', post);
        return result.data;
    } catch (error) {
        console.error('Error adding post:', error);
        throw error;
    }
};

export { getPosts, addPost };