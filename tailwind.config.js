/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#0f172a',
        },
      },
      boxShadow: {
        glow: '0 20px 45px -25px rgba(37, 99, 235, 0.75)',
      },
    },
  },
  plugins: [],
}
