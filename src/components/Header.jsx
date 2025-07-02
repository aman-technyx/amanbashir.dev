import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import signature from '../assets/signature.jpg'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'projects', label: 'Projects' },
        { to: 'experience', label: 'Experience' },
        { to: 'skills', label: 'Skills' },
        { to: 'services', label: 'Services' },
        { to: 'testimonials', label: 'Testimonials' },
        { to: 'achievements', label: 'Achievements' },
        { to: 'contact', label: 'Contact' }
    ]

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner">
                <Link to="home" className="logo" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img
                        src={signature}
                        alt="Signature"
                        style={{
                            height: 32,
                            width: 32,
                            objectFit: 'contain',
                            borderRadius: 6,
                            background: 'var(--logo-bg, #fff)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            border: '2px solid #9147ff',
                            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.10))',
                        }}
                    />
                    <span style={{ fontWeight: 700, fontSize: '1.5rem', color: 'inherit', letterSpacing: 1 }}>Aman Bashir</span>
                </Link>

                <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header
