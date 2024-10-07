import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // 로그인 로직 처리

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
                    <button onClick={() => { navigate('/register') }} className='primary-btn'>회원가입</button>
                    <button className='primary-btn' type="submit">로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
