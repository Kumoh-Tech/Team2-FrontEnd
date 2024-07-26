import axios from 'axios'

const getPosts = () => {
    axios.get('http://localhost:8080/').then((result) => {
        console.log(result.data);
    })
} // 백앤드 배포되면 URL 부분 수정

export { getPosts };