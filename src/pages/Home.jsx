import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="hero-title">Hi, I'm Aman —</h1>
                    <p className="hero-subtitle">
                        A full-stack software engineer building scalable web and mobile apps with React, Node.js, .NET & more.
                    </p>
                    <div className="hero-cta">
                        <Link to="contact" className="btn btn-primary" smooth={true} duration={500}>
                            Let's Connect
                        </Link>
                        <Link to="projects" className="btn btn-outline" smooth={true} duration={500}>
                            View My Work
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Home
