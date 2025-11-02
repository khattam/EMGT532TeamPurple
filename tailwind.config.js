/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        'primary-cyan': '#00D4FF',
        secondary: '#8B5CF6',
        'secondary-pink': '#EC4899',
        accent: '#10B981',
        'bg-dark': '#0A0A0A',
        'bg-dark-gray': '#1A1A1A',
      },
    },
  },
  plugins: [],
};
