const colors = {
    'steel-darker': '#404040',
    'steel-dark': '#595959',
    'steel': '#737373',
    'steel-light': '#919191',
    'steel-lighter': '#a6a6a6',
    'steel-lightest': '#d9d9d9',

    'olive': '#74992e'
};


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      margin: {
        '5': '5px',
      }
    },
  },
  plugins: [],
}
