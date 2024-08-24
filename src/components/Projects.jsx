import { PROJECTS } from "../constants"

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-center my-20 text-4xl">Projects</h2>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img width={200}
                     height={200}
                     src={project.image}
                     alt={project.title}
                     className="mb-6 rounded" />
                    </div>
                    <div className="w-full max-w-xl lg: w-3/4">
                    <h6 className="mb-2 max-2-xl text-xl font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech,index)=>
                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-3 py-1 font-medium text-purple-700 flex-wrap inline-flex'>{tech}</span>
                    )}
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects