const library = 'wysiwyg-editor-convert';

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    'draft-convert': 'DraftConvert',
    immutable: 'Immutable',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer',
  },
};

module.exports = [
  {
    ...baseConfig,
    mode: 'development',
    output: {
      filename: 'wysiwyg-editor-convert.js',
      library,
      libraryTarget: 'umd',
    },
  },
  {
    ...baseConfig,
    mode: 'production',
    output: {
      filename: 'wysiwyg-editor-convert.min.js',
      library,
      libraryTarget: 'umd',
    },
  },
];