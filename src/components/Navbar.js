import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="black-nav">
            <Link to="/" className='nav-btn'>게시판</Link>
            <Link to="/timetable" className='nav-btn'>시간표</Link>
            <Link to="/lecture" className='nav-btn'>강의실</Link>
            <Link to="/sugang" className='nav-btn'>수강신청</Link>
        </div>
    )
}

export default Navbar