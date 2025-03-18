// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './index.css'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project-archive" element={<ProjectArchive />} /> */}
    </Routes>
  )
}

export default App