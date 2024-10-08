import js from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

const tsConfig = tsEslint.config({
  extends: [
    js.configs.recommended,
    ...tsEslint.configs.recommended,
    eslintPluginPrettier,
  ],
  files: ['**/*.{js,ts,tsx}'],
  ignores: ['**/dist/**'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
})

export default tsConfig
