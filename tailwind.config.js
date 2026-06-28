/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blueprint: '#2507D8',
        deep: '#0A0C14',
        structural: '#151926',
        soft: '#222738',
        plaster: '#F4F6F9',
        gallery: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        blueprint: '0 24px 80px rgba(37, 7, 216, 0.28)',
        lift: '0 18px 50px rgba(10, 12, 20, 0.18)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
