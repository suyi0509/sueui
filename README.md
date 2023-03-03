`SUE-UI 艾美UI库`

- 文档工具 [dumi](https://v1.d.umijs.org/zh-CN)
- 组件库UI [antd](https://ant.design/index-cn)
- npm官网 [npm](https://www.npmjs.com/)

### 安装
```bash
# npm script
npm i
```

### 运行
```bash
# npm script
npm run dev 
```

### 打包
```bash
# npm script

# npm包
npm run np:build

# 项目文档
npm run docs:build
```

### 推送部署
```bash
# npm script

# npm包
npm run np:publish
```




## 项目结构
```js
test-uui
├─ demo                     // 组件文档demo示例文件夹
│  └─ Amtable               // 相对应组件的demo展示文件
│     └─ index.tsx
├─ docs                     // 文档 - 可在组件库文档新增其他页面
│  └─ index.md
├─ src                      // 公共组件 src
│  ├─ .umi                  // dumi文档缓存内容
│  ├─ AmTable
│  │  ├─ index.less         // .less样式   .sass样式系统环境依赖太大
│  │  ├─ index.md           // 组件md文件
│  │  └─ index.tsx
│  └─ index.ts              // 导出
├─ .babelrc                 // babel
├─ .gitignore               // git 忽略文档
├─ .umirc.ts                // dumi配置项
├─ gulpfile.js              // 打包配置项
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.build.json
└─ tsconfig.json
```

## 执行脚本
```js
    // 本地运行dumi文档项目
    "dev": "dumi dev", 
    "docs:preview": "cross-env SITE_BUILD_ENV=PREVIEW npm run docs:build && serve doc-site",

    // 删除doc-site[文档项目打包文件夹] .umi[本地缓存]文件
    "docs:clean": "rimraf doc-site src/.umi",

    // 1.删除doc-site[文档项目打包文件夹] 2.dumi文档打包生成新的 doc-site
    "docs:build": "rimraf doc-site && dumi build",

    // 关于自动部署
    "docs:deploy": "npm run docs:build && gh-pages -d doc-site", 

    // 清理lib esm[npm包]
    "np:clean": "rimraf lib esm dist",

    // 1.清理lib esm[npm包] 2.tsc通过tsconfig.build.json打包esm  3.用lib将lib复制了一份，为cjs和esm导出包时也能提供类型声明 4.gulp打包
    "np:build": "npm run np:clean && tsc -p tsconfig.build.json && cpr lib esm && gulp", 

    // npm 包发布
    "np:publish": "npm publish"
```