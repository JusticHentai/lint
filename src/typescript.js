module.exports = {
  extends: ['./basic'], // 继承基础
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // 只对 ts tsx 生效
      parser: '@typescript-eslint/parser', // @typescript-eslint/parse
      plugins: ['@typescript-eslint'], // @typescript-eslint
      extends: [
        'plugin:@typescript-eslint/recommended', // @typescript-eslint
        'plugin:import/typescript', // eslint-plugin-import
      ],
      // eslint-plugin-import 加载路径模块解析
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: ['./**/tsconfig.json', './**/jsconfig.json'],
          },
        },
        'import/extensions': ['.ts', '.tsx', '.d.ts'],
      },
      rules: {
        'no-shadow': 'off', // 关闭 eslint 的，使用 @typescript-eslint 的
        'import/default': 'off', // 使用 ts 自带的默认导出检测
        '@typescript-eslint/no-shadow': 'error', // 有影子变量直接报错
        '@typescript-eslint/no-empty-function': 'off', // 允许空函数
        // 空的 interface 警告
        '@typescript-eslint/no-empty-interface': [
          'warn',
          {
            allowSingleExtends: true, // 允许单独的 interface extends，不要自动转换为 type
          },
        ],
        // ts 注释 变成警告
        '@typescript-eslint/ban-ts-comment': [
          'error',
          { 'ts-ignore': 'allow-with-description' }, // 在描述里可以用
        ],
        '@typescript-eslint/no-explicit-any': 'off', // 允许 any
        // 没有使用的 vars 警告
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { vars: 'all', varsIgnorePattern: '^_' }, // 忽略这个模式的
        ],
      },
    },
  ],
}
