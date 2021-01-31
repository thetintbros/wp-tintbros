/* eslint-disable */

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
