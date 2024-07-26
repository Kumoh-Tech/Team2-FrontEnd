import axios from 'axios';

const getPosts = async () => {
    try {
        const result = await axios.get('http://localhost:8080/');
        return result.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
} // 백앤드 배포되면 URL 수정하기

export { getPosts };