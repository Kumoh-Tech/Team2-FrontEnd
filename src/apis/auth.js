import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Axios 인스턴스 생성
export const auth = axios.create({
    baseURL: `${API_BASE_URL}/users/`, // 서버의 기본 URL
});

// 요청 인터셉터 설정
auth.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 설정 (401 처리)
auth.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // 로그아웃 처리 또는 로그인 페이지로 리다이렉트
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

export const handleLogin = async (username, password, login, navigate, setErrorMessage) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/login`, {
            username: username,
            password: password,
        });

        localStorage.setItem('token', response.data.token);
        console.log('Login success:', response.data);

        login(response.data.userInfo);

        navigate('/');
    } catch (error) {
        setErrorMessage(error.response?.data?.message || error.message);
    }
};