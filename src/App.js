import './styles/App.css'
import './styles/Components.css'
import Navbar from './components/Navbar.js'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div> 메인 페이지 </div>} />
        <Route path="/timetable" element={<div> 시간표 페이지 </div>} />
        <Route path="/lecture" element={<div> 강의실 페이지 </div>} />
        <Route path="/sugang" element={<div> 수강신청 페이지</div>}></Route>
        <Route path="*" element={<div>없는 페이지입니다. (404)</div>} />
      </Routes>
    </div>
  );
}

export default App;