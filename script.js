// Tailwind CSS Configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#070b14',
                    bg: '#0a0f1d',
                    card: '#0d1527',
                    cardHover: '#131e38',
                    border: '#182744',
                    borderHover: '#00f2fe',
                    cyan: '#00f2fe',
                    blue: '#4facfe',
                    accent: '#00e5ff',
                    glow: 'rgba(0, 242, 254, 0.15)'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace']
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
};