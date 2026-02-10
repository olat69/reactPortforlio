/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#7c3aed',
          50: '#f6f0ff',
          100: '#efe6ff',
          200: '#dfccff',
          300: '#bf99ff',
          400: '#9b66ff',
          500: '#7c3aed',
          600: '#5a24be',
          700: '#42189a',
        },
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
          },
        },
      }),
      boxShadow: {
        soft: '0 6px 24px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
};
