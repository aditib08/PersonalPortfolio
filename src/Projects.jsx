import './App.css'
import ProjectCard from './ProjectCard'
import { projects } from './projectsData'

function Projects() {
  return (
    <div className="projectsPage">
      <h1 className="pageOmbreTitle">Projects</h1>
      <p className="projectsHead">
        "An idea is like a virus. Resilient. Highly contagious. And even the smallest seed of an idea can grow. It can grow to define or destroy you."
        <br /> - Dom Cobb
      </p>

      <div className="projectsList">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
