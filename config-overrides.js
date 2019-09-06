const { addLessLoader, fixBabelImports, override } = require('customize-cra');

const theme = require('./src/theme/theme.json');

/**
|--------------------------------------------------
| Follow the link to make check the variables that can be changed in the theme file
| https://ant.design/docs/react/customize-theme#Ant-Design-Less-variables
|--------------------------------------------------
*/

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
  })
);
