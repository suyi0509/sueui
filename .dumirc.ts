import { defineConfig } from 'dumi';

let base: string | undefined = '/am-ui';
let publicPath: string | undefined = '/am-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  themeConfig: {
    name: 'AM-UI',
    logo: 'http://www.meda.cc/favicon.ico',
    socialLinks:{
        github: 'https://github.com/suyi0509/test-uui',
        gitlab: 'https://github.com/suyi0509/test-uui'
    }
  },
  apiParser: {}, // API配置项
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  outputPath: 'doc-site',
  exportStatic: {}, // 可部署生成静态页面
  base,
  publicPath,
});
