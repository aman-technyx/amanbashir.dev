import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/ProjectCard'
import PlaceholderImage from '../components/PlaceholderImage'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const projectsRef = useRef(null)
    const projects = [
        {
            title: 'PractiCal (Fleet Filtering UI)',
            description: 'A dynamic dashboard built with React and Next.js to filter fleets by country, rig design, and type using live data logic.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            image: <PlaceholderImage />,
            github: 'https://github.com/amanbashirdev/practical',
            live: 'https://practical.amanbashir.dev'
        },
        {
            title: 'Mobile App with React Native',
            description: 'Cross-platform app built with React Native and Redux for tracking and managing logistics in real time.',
            technologies: ['React Native', 'Redux', 'Firebase', 'Node.js'],
            image: <PlaceholderImage />,
            github: 'https://github.com/amanbashirdev/mobile-app',
            live: 'https://mobile.amanbashir.dev'
        },
        {
            title: 'E-commerce Platform',
            description: 'Full-stack e-commerce platform with real-time inventory management and payment processing.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: <PlaceholderImage />,
            github: 'https://github.com/amanbashirdev/ecommerce',
            live: 'https://shop.amanbashir.dev'
        }
    ]

    useEffect(() => {
        const el = projectsRef.current
        gsap.fromTo(
            el,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
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
        <section id="projects" className="section gray-bg">
            <div className="container">
                <div ref={projectsRef}>
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
