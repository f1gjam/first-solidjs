// Overrides create-react-app webpack configs without ejecting
// https://github.com/timarney/react-app-rewired

const { useBabelRc, override, addPostcssPlugins } = require("customize-cra");

module.exports = override(
  useBabelRc(),
  addPostcssPlugins([
    require('tailwindcss'),
    require('autoprefixer'),
  ])
);