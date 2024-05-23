/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      // Adding custom gradient colors
      colors: {
        // Define your custom gradient colors
        'gradient-blue-green': {
          light: '#3490dc',
          DEFAULT: '#38c172',
          dark: '#276749',
        },
      },
      // Adding custom border gradients
      borderGradientColors: {
        // Define the name of your custom border gradient
        'gradient-blue-green': ['to right', 'var(--tw-gradient-blue-green-light)', 'var(--tw-gradient-blue-green-dark)'],
      },
      // Adding custom border gradient widths
      borderWidth: {
        // Define the name of your custom border gradient width
        '3': '3px',
      },
    },
  },
  plugins: [
    // Enable the border gradient plugin
    require('tailwindcss-border-gradient'),
  ],
};


