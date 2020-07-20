// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {textShadow: {
      default: '0 2px 0 #000',
      sm: '4px 3px 2px rgba(150, 150, 150, 0.53)',
      md: '0 2px 2px #000',
      h1: '0 0 3px #FF0000, 0 0 5px #0000FF',
      xl: '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      none: 'none',
    }},
  variants: {textShadow: ['responsive', 'hover'],},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms"), require('tailwindcss-textShadow')],
};
