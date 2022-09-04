/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // This is in beta, might break
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
