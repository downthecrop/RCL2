module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['node_modules/preline/dist/*.js',],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('preline/plugin'),],
}
