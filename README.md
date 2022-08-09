# Eslint-config

continuous integration Eslint-config

## Install

```bash
npm i @justichentai/eslint-config
```

## Usage

In `.eslintrc.js`
```js
module.exports = {  
  extends: ['@justichentai/eslint-config'],  
}
```

单独使用
```js
module.exports = {
  extends: [
    '@justichentai/eslint-config/basic',
    '@justichentai/eslint-config/typescript'
  ],
}
```

## Info

**dep：**
- `@typescript-eslint/eslint-plugin`：ts 相关 lint
- `@typescript-eslint/parser`：ts 解析器
- `eslint-config-google`：谷歌 相关预设
- `eslint-config-prettier`：prettier 相关预设
- `eslint-import-resolver-typescript`：路径引入 lint
- `eslint-plugin-import`：路径引入 lint
- `eslint-plugin-prettier`：prettier lint

**dev：**
- `eslint`：限制文件
- `prettier`：格式化所有文件
- `typescript`：ts
