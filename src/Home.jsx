import './App.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <p className="homeHead"> Hi, I'm Aditi <br/> Welcome to my personal website. </p>
      <button className="projectsButton" onClick={() => navigate('/projects')}>Projects</button>
      <button className="writingButton" onClick={() => navigate('/writing')}>Writing</button>
    </div>
  )
}

export default Home