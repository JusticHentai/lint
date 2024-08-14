// const js = require('@eslint/js')
// const globals = require('globals')
// const reactHooks = require('eslint-plugin-react-hooks')
// const reactRefresh = require('eslint-plugin-react-refresh')
// const tsEslint = require('typescript-eslint')
// const json = require('@eslint/json')
// const eslintPluginPrettier = require('eslint-plugin-prettier/recommended')

import js from '@eslint/js'
import json from '@eslint/json'
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
  ignores: ['dist'],
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
  },
})

const jsonConfig = {
  files: ['**/*.json'],
  plugins: {
    json,
  },
  language: 'json/json',
  rules: {
    'json/no-duplicate-keys': 'error',
  },
}

console.log([...tsConfig, jsonConfig])

export default [...tsConfig, jsonConfig]
