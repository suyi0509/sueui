/*
 * @Author: zhaoliang
 * @Date: 2023-02-28 20:52:07
 * @LastEditTime: 2023-02-28 20:52:07
 * @LastEditors: zhaoliang
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-ui\.umirc.ts
 * 菩提本无树，明镜亦非台。本来无一物，何处惹尘埃
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'XIANZAO UI',
  mode: 'site',
  outputPath: 'doc-site',
 	exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  webpack5: {},
});