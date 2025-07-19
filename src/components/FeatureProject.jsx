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
        gradient: "gradient-1"
    },
    {
        id: 2,
        title: "Vision 2030",
        description: "Official Saudi Vision 2030 government website built with Next.js. A comprehensive platform showcasing Saudi Arabia's ambitious transformation goals.",
        tags: ["Next.js", "Government", "Saudi Arabia"],
        link: "https://www.vision2030.gov.sa/en",
        gradient: "gradient-2"
    },
    {
        id: 3,
        title: "International Book Fair",
        description: "Mobile app for Abu Dhabi International Book Fair available on Android and iOS. Features event management, schedules, and interactive content.",
        tags: ["React Native", "Mobile", "Events"],
        link: "https://play.google.com/store/apps/details?id=ae.dctabudhabi.adibf",
        gradient: "gradient-3"
    },
    {
        id: 4,
        title: "Culture Summit",
        description: "Official mobile app for Culture Summit Abu Dhabi with cross-platform availability. Showcases cultural events and interactive experiences.",
        tags: ["React Native", "Culture", "Events"],
        link: "https://apps.apple.com/us/app/culture-summit-abu-dhabi/id6464405599",
        gradient: "gradient-4"
    },
    {
        id: 5,
        title: "Living Museum",
        description: "Interactive museum website built with Next.js featuring immersive digital experiences and cultural heritage content.",
        tags: ["Next.js", "Museum", "Interactive"],
        link: "https://www.livingmuseum.com/en/",
        gradient: "gradient-5"
    },
    {
        id: 6,
        title: "ADES Group",
        description: "Corporate website for ADES Group featuring modern design and comprehensive company information. Professional business platform with advanced functionality.",
        tags: ["Web Development", "Corporate", "Business"],
        link: "https://adesgroup.com/",
        gradient: "gradient-6"
    },
    {
        id: 7,
        title: "FGS Global",
        description: "Digital data and creative services platform for FGS Global. Showcases innovative digital solutions and creative agency capabilities.",
        tags: ["Digital", "Creative", "Agency"],
        link: "https://fgsglobal.com/what-we-do/digital-data-and-creative",
        gradient: "gradient-7"
    },
    {
        id: 8,
        title: "Saadiyat Culture",
        description: "Cultural district website for Saadiyat Cultural District Abu Dhabi. Features cultural events, exhibitions, and artistic experiences.",
        tags: ["Culture", "Events", "Exhibitions"],
        link: "https://scdabudhabi.ae",
        gradient: "gradient-8"
    },
    {
        id: 9,
        title: "Glacier Outdoor",
        description: "Outdoor adventure and equipment website featuring product showcases and adventure content. Modern e-commerce platform for outdoor enthusiasts.",
        tags: ["E-commerce", "Outdoor", "Adventure"],
        link: "https://glacieroutdoor.com/",
        gradient: "gradient-9"
    },
    {
        id: 10,
        title: "Bradri",
        description: "Innovative platform showcasing unique digital solutions and creative projects. Modern web application with cutting-edge features.",
        tags: ["Innovation", "Digital", "Creative"],
        link: "https://bradri.com/",
        gradient: "gradient-10"
    },
    {
        id: 11,
        title: "Cochlear",
        description: "Healthcare technology website for Cochlear featuring hearing solutions and medical device information. Professional healthcare platform with patient resources.",
        tags: ["Healthcare", "Medical", "Technology"],
        link: "https://www.cochlear.com/us/en/home",
        gradient: "gradient-1"
    },
    {
        id: 12,
        title: "Consumer Gobro",
        description: "Mobile app for consumer services platform available on Android. Features service booking, tracking, and user management capabilities.",
        tags: ["React Native", "Mobile", "Consumer Services"],
        link: "https://play.google.com/store/apps/details?id=com.spcom.gobroserviceprovider",
        gradient: "gradient-2"
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
        <div className='w-full gap-24 flex pb-20 pt-10 overflow-hidden justify-center'>
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
                            overflow: 'hidden',
                            marginRight: '0.1rem'
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
                                background: `var(--${item.gradient})`,
                                borderRadius: '16px',
                                transition: 'transform 500ms ease-in-out',
                                transform: isActive ? 'scale(1.05)' : 'scale(1)'
                            }}
                            className={cn(
                                isActive ? 'cursor-default' : 'cursor-pointer'
                            )}
                        />

                        {/* Dark overlay for better text readability */}
                        <div className="overlay-dark" />

                        {/* Content overlay */}
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="content-overlay"
                            >
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.4 }}
                                    className='text-lg md:text-2xl font-bold text-white drop-shadow-lg m-0'
                                >
                                    {item?.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className='leading-relaxed text-white/90 text-sm drop-shadow m-0'
                                >
                                    {item?.description}
                                </motion.p>
                                {item.tags && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                        className="flex gap-2 flex-wrap"
                                    >
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="tag-pill"
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
                                        className="project-link"
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
                    <h2 className="section-title">
                        Featured Projects
                    </h2>
                    <p className="mx-auto text-secondary text-lg max-w-2xl">
                        A showcase of my most impactful projects from 2018-2025.
                    </p>
                </motion.div>
            </div>

            {/* Hover Accordion Gallery - Full Width */}
            <div className="relative overflow-x-auto w-full">
                <Gallery items={items} index={index} setIndex={setIndex} />
            </div>
        </section>
    );
};

export default FeatureProject; 