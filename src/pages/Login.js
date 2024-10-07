import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useStore from './../store/store.js';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const login = useStore((state) => state.login);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username: username,
                password: password,
            });

            // JWT 토큰을 localStorage에 저장
            localStorage.setItem('token', response.data.token);
            console.log('로그인 성공:', response.data);
            login(response.data.userInfo);
            navigate('/')
        } catch (error) {
            setErrorMessage((error.response?.data?.message || error.message));
        }

    };

    return (
        <div className='box'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="text"
                        value={username}
                        placeholder='아이디'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        placeholder='비밀번호'
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button onClick={() => { navigate('/register') }} className='primary-btn'>회원가입</button>
                    <button className='primary-btn' type="submit">로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
