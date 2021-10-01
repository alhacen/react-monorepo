const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        yellow: {
          dark: '#f7e004',
          default: '#fee608',
          light: '#feec4d',
        },
        redCall: {
          default: 'red',
          dark: '#e60000',
        },
        greenCall: {
          default: '#27AE60',
          dark: '#219150',
        },
        themeBlue: {
          light: '#5A48DA',
          500: '#5A48DA',
          600: '#4E3DC5',
          700: '#41339E',
          800: '#15096A',
        },
        themeGray: {
          500: '#F4F4F4',
          800: '#DBDBDB',
        },
        themeBrown:{
          500: '#600F16',
          600: '#4a0c11',
          700: '#38080c'
        }
      },
      ring: ['hover', 'active'],
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover','hover'],
      backgroundColor: ['active'],
      ringWidth: ['hover', 'active'],
      textColor: ['disabled'],
      dropShadow: ['focus'],
    }
  },
  plugins: [],
}
