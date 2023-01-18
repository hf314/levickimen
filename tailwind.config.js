module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}