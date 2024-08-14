module.exports = {
  printWidth: 80, // 最长 80 个字符
  tabWidth: 2, // tab 变成两个空格
  useTabs: false, // tab 变空格
  semi: false, // 不要 ;
  singleQuote: true, // json 除外的 "" 变 ''
  quoteProps: 'as-needed', // object 的 key 只有需要时才加 ''
  jsxSingleQuote: false, // jsx 保留双引号
  trailingComma: 'es5', // 逗号在 ES5 中有效（对象、数组等） TypeScript 中的类型参数没有尾部逗号
  arrowParens: 'always', // 箭头函数 单个参数 也加括号
  endOfLine: 'lf', // 换行符 lf
  plugins: [
    require.resolve('prettier-plugin-organize-imports'), // import 排序 组合 去除无用
    require.resolve('prettier-plugin-packagejson'), // package.json 里面的 key 好好排序
  ],
}

