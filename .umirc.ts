import { defineConfig } from 'dumi';

let base: string | undefined = '/sue-ui';
let publicPath: string | undefined = '/sue-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'SUE-UI',
  logo: 'http://www.meda.cc/favicon.ico',
  apiParser: {}, // API配置项
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  outputPath: 'sue-ui',
  exportStatic: {}, // 可部署生成静态页面
  base,
  publicPath,
});
