import React from 'react';
import { Link } from "react-router-dom";
import useStore from '../store/store.js';
import '../styles/Navbar.css';

function Navbar() {
    const { user } = useStore();
    return (
        <div className="black-nav">
            <Link to="/" className='nav-btn'>Kumoh Coders</Link>
            <div className="ml-auto">
                <span> {
                    user.isLoggedIn ?
                        <Link to="#" className='nav-btn'> 로그아웃 </Link> :
                        <Link to="/login" className='nav-btn'> 로그인 </Link>
                }
                </span>
            </div>
        </div>
    );
}

export default Navbar;
