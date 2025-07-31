import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const aboutRef = useRef(null)
    useEffect(() => {
        const el = aboutRef.current
        gsap.fromTo(
            el,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
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
        <section id="about" className="section">
            <div className="container">
                <div ref={aboutRef}>
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Experienced Software Engineer based in Karachi, Pakistan, with 5+ years of expertise in building scalable web and mobile applications. I specialize in full-stack development using TypeScript, React, Node.js, .NET, and Java, and have a strong command over cloud platforms like AWS and Azure.
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
                                <h3>5+</h3>
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
                </div>
            </div>
        </section>
    )
}

export default About
