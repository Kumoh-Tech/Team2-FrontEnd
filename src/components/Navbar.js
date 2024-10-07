import React from 'react';
import logo from './../assets/logo.png';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import useStore from '../store/store.js';
import { useNavigate } from 'react-router-dom';
import auth from '../apis/auth.js';
import '../styles/Navbar.css';

function Navbar() {
    const { user } = useStore();
    const navigate = useNavigate();
    const login = useStore((state) => state.login);
    const logout = useStore((state) => state.logout);
    const handleLogout = () => {
        localStorage.removeItem('token');
        logout();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await auth.get('/auth');
                login(response.data.userInfo);
            } catch (error) {
                console.error('데이터 가져오기 실패:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="black-nav">
            <Link to="/" className='flex-container'>
                <img src={logo} alt="Kumoh Coders" className="nav-logo" />
                <h2 className='nav-title'>Kumoh Coders</h2>
            </Link>
            <div className="ml-auto">
                <span> {
                    user.isLoggedIn ?
                        <Link to='/' onClick={handleLogout} className='nav-btn'> 로그아웃 </Link> :
                        <Link to="/login" className='nav-btn'> 로그인 </Link>
                }
                </span>
            </div>
        </div>
    );
}

export default Navbar;
