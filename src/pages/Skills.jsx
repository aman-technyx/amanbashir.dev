import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SkillCard from '../components/SkillCard'

const Skills = () => {
    const skillsRef = useRef(null)
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

    useEffect(() => {
        const el = skillsRef.current
        gsap.fromTo(
            el,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        )
        // Animate each SkillCard with a stagger
        gsap.utils.toArray('.skills-grid .skill-card').forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )
        })
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section id="skills" className="section gray-bg">
            <div className="container">
                <div ref={skillsRef}>
                    <h2 className="section-title">Skills & Expertise</h2>
                    {/* <div className="skills-grid">
                        {skills.map((skillGroup, index) => (
                            <SkillCard key={index} {...skillGroup} />
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Skills
