import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from './../store/store.js';
import { handleLogin } from './../apis/auth.js';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const login = useStore((state) => state.login);

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password, login, navigate, setErrorMessage);
    };

    return (
        <div className='box'>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
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
                    <button className='primary-btn' type="submit">로그인</button>
                    <button onClick={() => navigate('/register')} className='primary-btn'>회원가입</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
