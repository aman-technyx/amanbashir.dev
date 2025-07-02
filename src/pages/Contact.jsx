import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'

const Contact = () => {
    const contactRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: Implement form submission logic
        console.log('Form submitted')
    }

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            content: 'hi@amanbashir.dev',
            link: 'mailto:hi@amanbashir.dev'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            content: '+92 345 234554',
            link: 'tel:+92345234554'
        },
        {
            icon: <FaGlobe />,
            title: 'Website',
            content: 'amanbashir.dev',
            link: 'https://amanbashir.dev'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            content: 'Karachi, Pakistan',
            link: 'https://maps.google.com/?q=Karachi,Pakistan'
        }
    ]

    useEffect(() => {
        const el = contactRef.current
        gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
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
        <section id="contact" className="section">
            <div className="container">
                <div ref={contactRef}>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p>Feel free to reach out to me for any questions or opportunities!</p>
                            <div className="contact-details">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-item"
                                    >
                                        <div className="contact-icon">{info.icon}</div>
                                        <div className="contact-text">
                                            <h4>{info.title}</h4>
                                            <p>{info.content}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
