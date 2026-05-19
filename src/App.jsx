import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Writing from './Writing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/writing" element={<Writing />} />
    </Routes>
  )
}

export default App