import './styles/App.css'
import './styles/Components.css'
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Enroll from './pages/Enroll.js'
import Post from './pages/Post.js'
import PostWrite from './pages/PostWrite.js'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/write" element={<PostWrite />} />
        <Route path="/timetable" element={<div> 시간표 페이지 </div>} />
        <Route path="/lecture" element={<div> 강의실 페이지 </div>} />
        <Route path="/sugang" element={<Enroll />}></Route>
        <Route path="*" element={<div>없는 페이지입니다. (404)</div>} />
      </Routes>
    </div>
  );
}

export default App;