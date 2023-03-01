/*
 * @Author: zhaoliang
 * @Date: 2023-02-28 20:52:07
 * @LastEditTime: 2023-03-01 11:40:44
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\.dumirc.ts
 * 菩提本无树，明镜亦非台。本来无一物，何处惹尘埃
 */
import { defineConfig } from 'dumi';

let base = '/test-uui';
let publicPath = '/test-uui/'

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
    base = undefined;
    publicPath = undefined
}

export default defineConfig({
    title: 'AM-UI',
    outputPath: 'doc-site',
    exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面
    base,
    publicPath,
});