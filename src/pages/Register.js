import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [displayname, setDisplayname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 비밀번호 일치 여부 확인
        if (password !== confirmPassword) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            // 회원가입 데이터를 백엔드로 전송
            const response = await axios.post('http://localhost:8080/register', {
                username: username,
                password: password,
                displayname: displayname
            });

            if (response.status === 201) {
                navigate('/');
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || error.message);
        }
    };

    return (

        <div className="box">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input
                        type="text"
                        value={username}
                        placeholder="아이디"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="비밀번호"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="비밀번호 확인"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>닉네임</label>
                    <input
                        type="text"
                        value={displayname}
                        placeholder="닉네임"
                        onChange={(e) => setDisplayname(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button className='primary-btn' type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default Register;
