// Overrides create-react-app webpack configs without ejecting
// https://github.com/timarney/react-app-rewired

const { useBabelRc, override } = require("customize-cra");

// CRA v5 automatically picks up postcss.config.js
// No need to explicitly add PostCSS plugins here
module.exports = override(
  useBabelRc()
);