import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            icon: <FaGithub />,
            url: 'https://github.com/aman-technyx',
            label: 'GitHub'
        },
        {
            icon: <FaLinkedin />,
            url: 'https://linkedin.com/in/bashiraman',
            label: 'LinkedIn'
        },
        {
            icon: <FaGlobe />,
            url: 'https://amanbashir.dev',
            label: 'Website'
        }
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="social-links">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <p className="copyright">
                        © {currentYear} Aman Bashir. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
