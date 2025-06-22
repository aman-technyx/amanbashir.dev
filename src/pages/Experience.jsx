import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    const experienceRef = useRef(null)
    const experiences = [
        {
            company: 'Technyx Systems',
            position: 'Senior Software Engineer',
            period: '2022 - Present',
            description: [
                'Led the development of enterprise-level web applications using React and Node.js',
                'Implemented CI/CD pipelines and automated testing processes',
                'Mentored junior developers and conducted code reviews',
                'Collaborated with cross-functional teams to deliver high-quality solutions'
            ]
        },
        {
            company: 'DCT Dubai',
            position: 'Full Stack Developer',
            period: '2020 - 2022',
            description: [
                'Developed and maintained multiple web applications using React and .NET',
                'Optimized database queries and improved application performance',
                'Implemented responsive designs and ensured cross-browser compatibility',
                'Worked closely with clients to gather requirements and provide technical solutions'
            ]
        },
        {
            company: 'Eike Consultancy',
            position: 'Software Developer',
            period: '2019 - 2020',
            description: [
                'Built and maintained web applications using React and Node.js',
                'Integrated third-party APIs and services',
                'Participated in agile development processes',
                'Contributed to the development of internal tools and utilities'
            ]
        }
    ]

    useEffect(() => {
        const el = experienceRef.current
        gsap.fromTo(
            el,
            { opacity: 0, rotateY: 45 },
            {
                opacity: 1,
                rotateY: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        )
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section id="experience" className="section">
            <div className="container">
                <div ref={experienceRef}>
                    <h2 className="section-title">Work Experience</h2>
                    <div className="experience-timeline">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <div className="experience-header">
                                    <h3 className="company-name">{exp.company}</h3>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <h4 className="position">{exp.position}</h4>
                                <ul className="description-list">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
