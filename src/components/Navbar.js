import React from 'react';
import logo from './../assets/logo.png';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import useStore from '../store/store.js';
import { auth } from '../apis/auth.js';
import '../styles/Navbar.css';

function Navbar() {
    const { user } = useStore();
    const login = useStore((state) => state.login);
    const logout = useStore((state) => state.logout);
    const handleLogout = () => {
        localStorage.removeItem('token');
        logout();
    };

    // 로그아웃 버튼은 두번 눌러야지 로그아웃되는 버그가 있다;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await auth.get('/auth');
                login(response.data.user);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [user]);

    return (
        <div className="black-nav">
            <Link to="/" className='flex-container'>
                <img src={logo} alt="Kumoh Coders" className="nav-logo" />
                <h2 className='nav-title'>Kumoh Coders</h2>
            </Link>
            <div className="ml-auto">
                <span>
                    {
                        user && user.isLoggedIn && user.userInfo ? (
                            <>
                                <Link to='/' className='nav-btn'>
                                    {user.userInfo.displayname ?? '로드중'}
                                </Link>
                                <Link to='/' onClick={handleLogout} className='nav-btn'>
                                    로그아웃
                                </Link>
                            </>
                        ) : (
                            <Link to="/login" className='nav-btn'> 로그인 </Link>
                        )
                    }
                </span>
            </div>
        </div>
    );

}

export default Navbar;
