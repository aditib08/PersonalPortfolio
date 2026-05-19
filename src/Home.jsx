import './App.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <p className="homeHead"> Hi, I'm Aditi <br/> </p>
      <p className="homeBody"> I'm a computer science student at the University of Virginia. I also enjoy writing and finding creative ways to express my ideas. </p>
      <button className="projectsButton" onClick={() => navigate('/projects')}>Projects</button>
      <button className="writingButton" onClick={() => navigate('/writing')}>Writing</button>
    </div>
  )
}

export default Home