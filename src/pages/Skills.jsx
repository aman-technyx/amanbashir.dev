import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'

const Skills = () => {
    const skills = [
        {
            category: 'Frontend',
            items: [
                { name: 'React', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'Tailwind CSS', level: 85 }
            ]
        },
        {
            category: 'Backend',
            items: [
                { name: 'Node.js', level: 85 },
                { name: 'Express.js', level: 80 },
                { name: '.NET', level: 75 },
                { name: 'Python', level: 70 },
                { name: 'SQL', level: 85 }
            ]
        },
        {
            category: 'Tools & Others',
            items: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'CI/CD', level: 80 },
                { name: 'Agile', level: 85 }
            ]
        }
    ]

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

    return (
        <section id="skills" className="section gray-bg">
            <div className="container">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">Skills & Expertise</h2>
                    <div className="skills-grid">
                        {skills.map((skillGroup, index) => (
                            <SkillCard key={index} {...skillGroup} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
