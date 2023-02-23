/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.875rem', {lineHeight: '1rem'}],
        sm: ['0.9375rem', {lineHeight: '1'}],
        base: ['1rem', {lineHeight: '1'}],
        lg: ['1.0625rem', {lineHeight: '1'}],
        xl: ['1.125rem', {lineHeight: '1'}],
        '2xl': ['1rem', {lineHeight: '1'}],
        '3xl': ['1.0625rem', {lineHeight: '1'}],
        '4xl': ['1.125rem', {lineHeight: '1'}],
        '5xl': ['1.25rem', {lineHeight: '1'}],
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        josefinsans: ['JosefinSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
