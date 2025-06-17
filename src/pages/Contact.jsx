import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'

const Contact = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

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

    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">Get In Touch</h2>
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
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Your message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
