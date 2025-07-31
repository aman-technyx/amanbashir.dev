import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-scroll'
import profileImg from '../assets/profile.jpeg'

gsap.registerPlugin(ScrollTrigger)

const Home = ({ theme }) => {
    const heroRef = useRef(null)
    useEffect(() => {
        const el = heroRef.current
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
    }, [])
    return (
        <section id="home" className="hero bg-pattern noise-texture">
            <div className="container hero-container">
                <div ref={heroRef} className="hero-content">
                    <div className="hero-profile">
                        <img
                            src={profileImg}
                            alt="Aman Bashir profile"
                            className="hero-image"
                        />
                        <h1 className="hero-title">Hi, I'm Aman Bashir —</h1>
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
                            <a href="/files/aman-bashir-cv.pdf" className="btn btn-outline" download>
                                <span>Download CV</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
