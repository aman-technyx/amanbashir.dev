import { motion } from 'framer-motion'

const SkillCard = ({ category, items }) => {
    return (
        <motion.div
            className="skill-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <h3 className="skill-category">{category}</h3>
            <div className="skill-items">
                {items.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <motion.div
                                className="skill-progress"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default SkillCard
