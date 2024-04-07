import React from 'react'
import Default_page from '../../components/default_page'

import { ProjectsList } from '../../common/utils/projects'

function Projects() {
    
  return (
    <Default_page>
      <header className='mt-5'>
        <h1 className='text-center text-4xl'>My personal <span className='font-extrabold'>projects</span></h1>
      </header>

      <section className='projects'>
        
        {ProjectsList?.map((project, idx)=>{
          return <div key={idx} className='project' onClick={()=>{window.open(project.github_repo)}}>

            <div className='project-image-container'>
              <img className='project-image' src={project.image}/>
            </div>
            <div className='project-title-container'>
              <h1 className='project-title text-lg antialiased font-bold text-pretty'>{project.name}</h1>
            </div>

          </div>
        })}

      </section>

    </Default_page>
  )
}

export default Projects