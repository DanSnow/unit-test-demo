module.exports = {
  content: ['index.html', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
}
