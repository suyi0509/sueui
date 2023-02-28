/*
 * @Author: zhaoliang
 * @Date: 2023-02-28 21:28:40
 * @LastEditTime: 2023-02-28 21:40:38
 * @LastEditors: zhaoliang
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-ui\gulpfile.js
 * 菩提本无树，明镜亦非台。本来无一物，何处惹尘埃
 */
const gulp = require('gulp');
const babel = require('gulp-babel');

const paths = {
  dest: {
    lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
    esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
    dist: 'dist', // umd文件存放的目录名 - 暂时不关心
  },
  styles: 'src/**/*.less', // 样式文件路径 - 暂时不关心
  scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}'], // 脚本文件路径
};

// function compileCJS() {
//   const { dest, scripts } = paths;
//   return gulp
//     .src(scripts)
//     .pipe(babel()) // 使用gulp-babel处理
//     .pipe(gulp.dest(dest.lib));
// }

// // 并行任务 后续加入样式处理 可以并行处理
// const build = gulp.parallel(compileCJS);

// exports.build = build;

// exports.default = build;

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
 function compileScripts(babelEnv, destDir) {
    const { scripts } = paths;
    // 设置环境变量
    process.env.BABEL_ENV = babelEnv;
    return gulp
      .src(scripts)
      .pipe(babel()) // 使用gulp-babel处理
      .pipe(gulp.dest(destDir));
  }
  
  /**
   * 编译cjs
   */
  function compileCJS() {
    const { dest } = paths;
    return compileScripts('cjs', dest.lib);
  }
  
  /**
   * 编译esm
   */
  function compileESM() {
    const { dest } = paths;
    return compileScripts('esm', dest.esm);
  }
  
  function copyLess() {
    return gulp.src(paths.styles).pipe(gulp.dest(paths.dest.lib)).pipe(gulp.dest(paths.dest.esm));
  }

  // 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
  const buildScripts = gulp.series(compileCJS, compileESM);
  
  // 整体并行执行任务
  const build = gulp.parallel(buildScripts,copyLess);

  exports.build = build;

  exports.default = build;