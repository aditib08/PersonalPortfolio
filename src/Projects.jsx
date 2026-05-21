import { useEffect, useState } from 'react'
import './App.css'
import ProjectCard from './ProjectCard'
import { projects } from './projectsData'

const PAGE_REST_DELAY_MS = 550

function Projects() {
  const [showRest, setShowRest] = useState(false)

  useEffect(() => {
    const timerId = setTimeout(() => setShowRest(true), PAGE_REST_DELAY_MS)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="projectsPage">
      <h1 className="pageOmbreTitle">Projects</h1>
      {showRest && (
        <div className="pageRest">
          <p className="projectsHead">
            "An idea is like a virus. Resilient. Highly contagious. And even the smallest seed of an idea can grow. It can grow to define or destroy you."
            <br /> <br /> Dom Cobb | Inception
          </p>

          <div className="projectsList">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
