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
        <section id="home" className="hero">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
