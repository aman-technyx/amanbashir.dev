import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import signature from '../assets/signature.jpg'
import { useLanguage } from '../contexts/LanguageContext'

const Header = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { language, toggleLanguage } = useLanguage()

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
        { to: 'services', label: 'Services' },
        { to: 'projects', label: 'Projects' },
        { to: 'experience', label: 'Experience' },
        { to: 'skills', label: 'Skills' },
        { to: 'contact', label: 'Contact' }
    ]

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner">
                <Link to="home" className="logo" smooth={true} duration={500}>
                    <span className="logo-text">Aman Bashir</span>
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
                    <button
                        onClick={toggleLanguage}
                        className="theme-toggle theme-toggle-mobile language-toggle"
                        aria-label="Toggle language"
                    >
                        {language === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}
                    </button>
                    <button
                        onClick={toggleTheme}
                        className={`theme-toggle theme-toggle-mobile ${theme}`}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                    </button>
                </nav>

                <div className="header-actions">
                    <button
                        onClick={toggleLanguage}
                        className="theme-toggle theme-toggle-desktop language-toggle"
                        aria-label="Toggle language"
                    >
                        {language === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}
                    </button>
                    <button
                        onClick={toggleTheme}
                        className={`theme-toggle theme-toggle-desktop ${theme}`}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                    </button>
                    <button
                        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
