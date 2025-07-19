/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                // Additional theme colors
                white: "var(--white)",
                black: "var(--black)",
                gray: {
                    light: "var(--gray-light)",
                    medium: "var(--gray-medium)",
                    dark: "var(--gray-dark)",
                },
                blue: {
                    primary: "var(--blue-primary)",
                    secondary: "var(--blue-secondary)",
                },
                purple: {
                    twitch: "var(--purple-twitch)",
                },
                border: {
                    white: "var(--border-white)",
                },
                background: {
                    light: "var(--background-light)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            animation: {
                'scroll': 'scroll 20s linear infinite',
                'border': 'border 4s linear infinite',
            },
            keyframes: {
                'scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'border': {
                    'to': { '--border-angle': '360deg' },
                },
            },
        },
    },
    plugins: [],
} 