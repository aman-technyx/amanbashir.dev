import React from 'react';
import GradientBorder from '../components/GradientBorder';
import { FaCode, FaMobile, FaDesktop, FaDatabase, FaCloud, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaCode className="text-4xl" />,
            title: "Web Development",
            description: "Custom web applications built with modern technologies like React, Node.js, and TypeScript. Responsive, scalable, and performant solutions.",
            gradient: ["#3b82f6", "#8b5cf6", "#ec4899"]
        },
        {
            icon: <FaMobile className="text-4xl" />,
            title: "Mobile Development",
            description: "Cross-platform mobile applications using React Native and Flutter. Native performance with shared codebase for iOS and Android.",
            gradient: ["#10b981", "#059669", "#047857"]
        },
        {
            icon: <FaDesktop className="text-4xl" />,
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces designed with user experience in mind. From wireframes to pixel-perfect implementations.",
            gradient: ["#f59e0b", "#d97706", "#b45309"]
        },
        {
            icon: <FaDatabase className="text-4xl" />,
            title: "Backend Development",
            description: "Robust backend systems with RESTful APIs, GraphQL, and microservices architecture. Built with Node.js, Python, and cloud technologies.",
            gradient: ["#ef4444", "#dc2626", "#b91c1c"]
        },
        {
            icon: <FaCloud className="text-4xl" />,
            title: "Cloud Solutions",
            description: "Cloud infrastructure setup and management using AWS, Azure, and Google Cloud. DevOps practices and CI/CD pipeline implementation.",
            gradient: ["#06b6d4", "#0891b2", "#0e7490"]
        },
        {
            icon: <FaShieldAlt className="text-4xl" />,
            title: "Security & Testing",
            description: "Comprehensive security audits, penetration testing, and automated testing strategies. Ensuring your applications are secure and reliable.",
            gradient: ["#8b5cf6", "#7c3aed", "#6d28d9"]
        }
    ];

    return (
        <section id="services" className="section py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title text-4xl font-bold mb-4">Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I offer comprehensive development services to help bring your ideas to life.
                        From concept to deployment, I'm here to build exceptional digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {services.map((service, index) => (
                        <GradientBorder
                            key={index}
                            gradientColors={service.gradient}
                            className="w-full h-48"
                            borderWidth="2px"
                            borderRadius="0.75rem"
                        >
                            <div className="text-center p-4">
                                <div className="text-primary mb-3 flex justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </GradientBorder>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
