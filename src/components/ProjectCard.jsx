import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, technologies, image, github, live }) => {
    return (
        <motion.div
            className="project-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <div className="project-image">
                {typeof image === 'string' ? (
                    <img src={image} alt={title} />
                ) : (
                    image
                )}
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="project-links">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="GitHub Repository"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Live Demo"
                    >
                        <FaExternalLinkAlt />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
