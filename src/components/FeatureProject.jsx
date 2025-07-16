import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../utils';

const items = [
    {
        id: 1,
        title: "Visit Abu Dhabi",
        description: "Official tourism website featuring GSAP animations, Pixi.js graphics, and Three.js 3D experiences. A cutting-edge digital platform showcasing Abu Dhabi's attractions.",
        tags: ["React", "GSAP", "Three.js", "Pixi.js"],
        link: "https://visitabudhabi.ae/",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        title: "Vision 2030",
        description: "Official Saudi Vision 2030 government website built with Next.js. A comprehensive platform showcasing Saudi Arabia's ambitious transformation goals.",
        tags: ["Next.js", "Government", "Saudi Arabia"],
        link: "https://www.vision2030.gov.sa/en",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 3,
        title: "International Book Fair",
        description: "Mobile app for Abu Dhabi International Book Fair available on Android and iOS. Features event management, schedules, and interactive content.",
        tags: ["React Native", "Mobile", "Events"],
        link: "https://play.google.com/store/apps/details?id=ae.dctabudhabi.adibf",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 4,
        title: "Culture Summit",
        description: "Official mobile app for Culture Summit Abu Dhabi with cross-platform availability. Showcases cultural events and interactive experiences.",
        tags: ["React Native", "Culture", "Events"],
        link: "https://apps.apple.com/us/app/culture-summit-abu-dhabi/id6464405599",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
        id: 5,
        title: "Living Museum",
        description: "Interactive museum website built with Next.js featuring immersive digital experiences and cultural heritage content.",
        tags: ["Next.js", "Museum", "Interactive"],
        link: "https://www.livingmuseum.com/en/",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        id: 6,
        title: "ADES Group",
        description: "Corporate website for ADES Group featuring modern design and comprehensive company information. Professional business platform with advanced functionality.",
        tags: ["Web Development", "Corporate", "Business"],
        link: "https://adesgroup.com/",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
        id: 7,
        title: "FGS Global",
        description: "Digital data and creative services platform for FGS Global. Showcases innovative digital solutions and creative agency capabilities.",
        tags: ["Digital", "Creative", "Agency"],
        link: "https://fgsglobal.com/what-we-do/digital-data-and-creative",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
        id: 8,
        title: "Saadiyat Culture",
        description: "Cultural district website for Saadiyat Cultural District Abu Dhabi. Features cultural events, exhibitions, and artistic experiences.",
        tags: ["Culture", "Events", "Exhibitions"],
        link: "https://scdabudhabi.ae",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
        id: 9,
        title: "Glacier Outdoor",
        description: "Outdoor adventure and equipment website featuring product showcases and adventure content. Modern e-commerce platform for outdoor enthusiasts.",
        tags: ["E-commerce", "Outdoor", "Adventure"],
        link: "https://glacieroutdoor.com/",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    },
    {
        id: 10,
        title: "Bradri",
        description: "Innovative platform showcasing unique digital solutions and creative projects. Modern web application with cutting-edge features.",
        tags: ["Innovation", "Digital", "Creative"],
        link: "https://bradri.com/",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
    },
    {
        id: 11,
        title: "Cochlear",
        description: "Healthcare technology website for Cochlear featuring hearing solutions and medical device information. Professional healthcare platform with patient resources.",
        tags: ["Healthcare", "Medical", "Technology"],
        link: "https://www.cochlear.com/us/en/home",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 12,
        title: "Consumer Gobro",
        description: "Mobile app for consumer services platform available on Android. Features service booking, tracking, and user management capabilities.",
        tags: ["React Native", "Mobile", "Consumer Services"],
        link: "https://play.google.com/store/apps/details?id=com.spcom.gobroserviceprovider",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
];

const article = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

function Gallery({ items, setIndex, index }) {
    return (
        <div className='w-full gap-16 flex pb-20 pt-10 overflow-hidden justify-center'>
            {items.map((item, i) => {
                const isActive = index === i;
                return (
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        style={{
                            borderRadius: '16px',
                            height: '500px',
                            flexShrink: 0,
                            transition: 'width 500ms ease-in-out',
                            width: isActive ? '500px' : '60px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        className={cn(
                            'md:h-[700px]',
                            isActive ? 'md:w-[800px]' : 'md:w-[100px]'
                        )}
                        key={i}
                        onClick={() => setIndex(i)}
                        onMouseEnter={() => setIndex(i)}
                    >
                        {/* Gradient Background */}
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: item.gradient,
                                borderRadius: '16px',
                                transition: 'transform 500ms ease-in-out',
                                transform: isActive ? 'scale(1.05)' : 'scale(1)'
                            }}
                            className={cn(
                                isActive ? 'cursor-default' : 'cursor-pointer'
                            )}
                        />

                        {/* Dark overlay for better text readability */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '16px'
                            }}
                        />

                        {/* Content overlay */}
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '24px',
                                    gap: '12px',
                                    borderRadius: '16px',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
                                }}
                            >
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.4 }}
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: 'white',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                        margin: 0
                                    }}
                                    className='md:text-2xl'
                                >
                                    {item?.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    style={{
                                        lineHeight: '1.6',
                                        color: 'rgba(255,255,255,0.9)',
                                        fontSize: '14px',
                                        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                                        margin: 0
                                    }}
                                >
                                    {item?.description}
                                </motion.p>
                                {item.tags && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                        style={{
                                            display: 'flex',
                                            gap: '8px',
                                            flexWrap: 'wrap'
                                        }}
                                    >
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                style={{
                                                    padding: '4px 12px',
                                                    fontSize: '12px',
                                                    fontWeight: '500',
                                                    backgroundColor: 'rgba(255,255,255,0.25)',
                                                    backdropFilter: 'blur(4px)',
                                                    borderRadius: '9999px',
                                                    color: 'white',
                                                    border: '1px solid rgba(255,255,255,0.3)'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </motion.div>
                                )}
                                {item.link && (
                                    <motion.a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.4 }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '8px 16px',
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            border: '1px solid rgba(255,255,255,0.3)',
                                            backdropFilter: 'blur(4px)',
                                            transition: 'all 0.3s ease',
                                            alignSelf: 'flex-start',
                                            marginTop: '8px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <span>Visit Project</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15,3 21,3 21,9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </motion.a>
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}

const FeatureProject = () => {
    const [index, setIndex] = useState(2);

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A showcase of my most impactful projects from 2018-2025.
                    </p>
                </motion.div>

                {/* Hover Accordion Gallery */}
                <div className="relative overflow-x-auto w-full">
                    <Gallery items={items} index={index} setIndex={setIndex} />
                </div>
            </div>
        </section>
    );
};

export default FeatureProject; 