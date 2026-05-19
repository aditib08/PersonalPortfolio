import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import Writing from './Writing'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </>
  )
}

export default App