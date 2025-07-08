import React from 'react'

interface ProjectCardProps {
    icon: string,
    title: string, 
    description: string,
    technologies: string[],
}
const ProjectCard : React.FC<ProjectCardProps> = ({ icon, title, description, technologies }) => {
  return (
    <div className="project-card group">
      <div className="h-48 bg-gradient-to-br from-slate-900 to-slate-800 border-b border-cyan-500/20 flex items-center justify-center text-4xl text-cyan-400">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard