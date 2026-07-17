/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00a3ff',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(0, 163, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
