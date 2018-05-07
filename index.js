module.exports = function(context, userOptions = {}) {
  const defaultOptions = {
    es: true,
    style: 'css',
  };

  const options = Object.assign({}, userOptions, defaultOptions);

  return {
    plugins: [
      [
        require.resolve('babel-plugin-import'),
        {
          libraryName: 'antd',
          libraryDirectory: options.es === false ? 'lib' : 'es',
          style: options.style,
        }
      ]
    ]
  };
};
