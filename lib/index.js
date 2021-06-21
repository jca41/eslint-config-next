module.exports = {
  extends: ['prettier', 'next'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/sort': 'error',
  },
};
