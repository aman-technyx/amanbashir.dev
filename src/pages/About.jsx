import { motion } from 'framer-motion'

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Experienced Software Engineer based in Karachi, Pakistan, with 4+ years of expertise in building scalable web and mobile applications. I specialize in full-stack development using TypeScript, React, Node.js, .NET, and Java, and have a strong command over cloud platforms like AWS and Azure.
                            </p>
                            <p>
                                I am known for writing clean, maintainable code, solving complex problems, and delivering production-ready solutions. My experience spans frontend and backend development, cloud infrastructure, and DevOps practices. I thrive in Agile/Scrum environments and enjoy collaborating with cross-functional teams.
                            </p>
                            <p>
                                Outside of work, I enjoy exploring new technologies, contributing to open-source, and sharing knowledge with the developer community.
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>4+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>10+</h3>
                                <p>Major Projects</p>
                            </div>
                            <div className="stat-item">
                                <h3>5+</h3>
                                <p>Certifications</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
