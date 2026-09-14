/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Newsreader"', '"Cormorant Garamond"', 'serif'],
      },
      colors: {
        sage: {
          50: '#f4f8f4',
          100: '#e5efe6',
          200: '#d1e3d4',
          300: '#b2d1b7',
          500: '#53825d',
          800: '#233d28',
          900: '#17281b',
        },
        canvas: {
          DEFAULT: '#fcfcfd',
          card: '#eef5ef',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
