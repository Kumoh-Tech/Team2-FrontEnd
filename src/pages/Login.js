import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                        type="email"
                        value={email}
                        placeholder='아이디'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        placeholder='비밀번호'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='primary-btn' type="submit">회원가입</button>
                <button className='primary-btn' type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;
