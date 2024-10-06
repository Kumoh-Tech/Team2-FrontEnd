import './styles/App.css';
import './styles/Components.css';
import './styles/Home.css';
import './styles/index.css';
import './styles/Post.css';
import './styles/Box.css';
import './styles/Navbar.css';

import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Post from './pages/Post.js';
import PostWrite from './pages/PostWrite.js';
import Login from './pages/Login.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/write" element={<PostWrite />} />
        <Route path="/edit/:id" element={<PostWrite />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<div>없는 페이지입니다. (404)</div>} />
      </Routes>
    </div>
  );
}

export default App;
