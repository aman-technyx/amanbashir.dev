import React from 'react';

const LogoCarousel = () => {
    // Add CSS animation styles
    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 100s linear infinite;
        gap: 40px !important;
      }
      .animate-scroll > div {
        margin: 0 20px !important;
        min-width: 160px !important;
      }
      .animate-scroll img {
        height: 56px !important;
        width: auto !important;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);
    // Tech stack company logos
    const logos = [
        {
            id: 1,
            name: 'React.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            id: 2,
            name: 'Next.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        {
            id: 3,
            name: 'TypeScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
            id: 4,
            name: 'JavaScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
            id: 5,
            name: 'Material UI',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
        },
        {
            id: 6,
            name: 'Tailwind CSS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
        },
        {
            id: 7,
            name: 'GSAP',
            logo: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg'
        },
        {
            id: 8,
            name: 'Framer Motion',
            logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg'
        },
        {
            id: 9,
            name: 'React Native',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            id: 10,
            name: 'Node.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
            id: 11,
            name: '.NET Core',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
        },
        {
            id: 12,
            name: 'Laravel',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg'
        },
        {
            id: 13,
            name: 'REST API',
            logo: 'https://cdn-icons-png.flaticon.com/512/3039/3039183.png'
        },
        {
            id: 14,
            name: 'GraphQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
        },
        {
            id: 15,
            name: 'MySQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
            id: 16,
            name: 'PostgreSQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
            id: 17,
            name: 'MongoDB',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        {
            id: 18,
            name: 'AWS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
        },
        {
            id: 19,
            name: 'Azure',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
        },
        {
            id: 20,
            name: 'Vercel',
            logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png'
        },
        {
            id: 21,
            name: 'Netlify',
            logo: 'https://cdn.worldvectorlogo.com/logos/netlify.svg'
        },
        {
            id: 22,
            name: 'WordPress',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
        },
        {
            id: 23,
            name: 'Sanity',
            logo: 'https://seeklogo.com/images/S/sanity-logo-FC4DBE1E48-seeklogo.com.png'
        },
        {
            id: 24,
            name: 'Sitecore',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Sitecore_logo.svg'
        },
        {
            id: 25,
            name: 'Three.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'
        },
        {
            id: 26,
            name: 'WebGL',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/WebGL_Logo.svg'
        },
        {
            id: 27,
            name: 'Git',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
            id: 28,
            name: 'GitHub',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
            id: 29,
            name: 'Bitbucket',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg'
        }
    ];

    return (
        <div className="w-full py-12 bg-gray-50 dark:bg-gray-900">
            <div className="w-full px-4">

                {/* Logo Carousel Container */}
                <div className="relative overflow-hidden">
                    {/* Gradient Overlays for smooth fade effect */}
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>

                    {/* Scrolling Logos */}
                    <div
                        className="flex animate-scroll"
                        style={{
                            width: 'max-content',
                            animation: 'scroll 100s linear infinite',
                            gap: '40px'
                        }}
                    >
                        {/* First set of logos */}
                        {logos.map((logo) => (
                            <div
                                key={logo.id}
                                className="flex-shrink-0 mx-8 flex items-center justify-center min-w-[160px]"
                            >
                                <img
                                    src={logo.logo}
                                    alt={logo.name}
                                    className="h-14 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {logos.map((logo) => (
                            <div
                                key={`duplicate-${logo.id}`}
                                className="flex-shrink-0 mx-8 flex items-center justify-center min-w-[160px]"
                            >
                                <img
                                    src={logo.logo}
                                    alt={logo.name}
                                    className="h-14 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel; 