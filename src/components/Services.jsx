import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaMobile, FaServer, FaCloud, FaPalette, FaCogs } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <FaCode />,
        title: "Frontend Development",
        description: "Building responsive, interactive user interfaces with React, Next.js, and modern web technologies.",
        features: ["React & Next.js", "TypeScript", "Tailwind CSS", "GSAP Animations"],
        gradient: "gradient-1"
    },
    {
        icon: <FaMobile />,
        title: "Mobile Development",
        description: "Cross-platform mobile applications with React Native for iOS and Android platforms.",
        features: ["React Native", "iOS & Android", "Native Modules", "App Store Deployment"],
        gradient: "gradient-2"
    },
    {
        icon: <FaServer />,
        title: "Backend Development",
        description: "Scalable server-side applications and APIs using Node.js, .NET, and cloud technologies.",
        features: ["Node.js & Express", ".NET Core", "REST APIs", "Database Design"],
        gradient: "gradient-3"
    },
    {
        icon: <FaCloud />,
        title: "Cloud & DevOps",
        description: "Cloud infrastructure, CI/CD pipelines, and deployment automation for modern applications.",
        features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring"],
        gradient: "gradient-4"
    },
    {
        icon: <FaPalette />,
        title: "UI/UX Design",
        description: "User-centered design with modern interfaces, animations, and exceptional user experiences.",
        features: ["Figma & Adobe XD", "Prototyping", "User Research", "Design Systems"],
        gradient: "gradient-5"
    },
    {
        icon: <FaCogs />,
        title: "System Architecture",
        description: "Designing scalable, maintainable system architectures for enterprise applications.",
        features: ["Microservices", "API Design", "Performance Optimization", "Security"],
        gradient: "gradient-6"
    }
];

const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, [index]);

    return (
        <motion.div
            ref={cardRef}
            className="service-card"
            whileHover={{
                y: -8,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="service-card-inner">
                <div className={`service-icon ${service.gradient}`}>
                    {service.icon}
                </div>
                <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-features">
                        {service.features.map((feature, idx) => (
                            <span key={idx} className="service-feature">
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="service-glow"></div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const servicesRef = useRef(null);

    useEffect(() => {
        const el = servicesRef.current;
        gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section id="services" className="services-section">
            <div className="services-background">
                <div className="services-grid-overlay"></div>
            </div>

            <div className="container">
                <div ref={servicesRef} className="services-header">
                    <motion.h2
                        className="services-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Services I Offer
                    </motion.h2>
                    <motion.p
                        className="services-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Comprehensive software development solutions tailored to your business needs
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 