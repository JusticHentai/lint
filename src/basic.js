module.exports = {
  // 基本环境
  env: {
    browser: true, // 浏览器
    node: true, // node
    es6: true, // es系列
  },
  ignorePatterns: [
    '*.min.*',
    'dist',
    'output',
    'coverage',
    'public',
    'temp',
    '__snapshots__',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended', // eslint-plugin-import 推荐
    'plugin:import/recommended', // eslint-plugin-import
    'plugin:prettier/recommended', // eslint-config-prettier eslint-plugin-prettier
  ],
  // eslint-plugin-import 加载路径模块解析
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./**/tsconfig.json', './**/jsconfig.json'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.mjs'],
  },
  rules: {
    'prettier/prettier': 'warn', // eslint-plugin-prettier eslint-config-prettier 让 prettier 相关变成 warn
    'no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_' }],
    'import/no-named-as-default': 'off',
    // 使用单成员导出
    'import/no-named-as-default-member': 'off',
    // async 必须有 await
    'require-await': 'warn',
    // generator 函数必须有 yield
    'require-yield': 'warn',
    // 不要有 shadow 变量
    'no-shadow': 'error',
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
}
