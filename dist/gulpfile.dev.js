"use strict";

var _require = require("gulp"),
  src = _require.src,
  dest = _require.dest,
  parallel = _require.parallel,
  watch = _require.watch,
  series = _require.series,
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  browserSync = require("browser-sync").create();
/** Files Path */

var FilesPath = {
  sassFiles: "assets/scss/**",
  htmlFiles: "*.html",
  pugFiles: "assets/pug/pages/*.pug*",
};
var sassFiles = FilesPath.sassFiles,
  htmlFiles = FilesPath.htmlFiles,
  pugFiles = FilesPath.pugFiles;
/** Sass Task */

function sassTask() {
  return src(sassFiles)
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(concat("style.css"))
    .pipe(dest("assets/css"))
    .pipe(browserSync.stream());
}
/** Pug Task */

function pugTask() {
  return src(pugFiles)
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest("./"))
    .pipe(browserSync.stream());
}
/** HTML Task */

/** Watch Task */

function serve() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 4000,
  });
  watch(sassFiles, sassTask);
}

exports.sass = sassTask;
exports.pug = pugTask;
exports["default"] = series(parallel(pugTask, sassTask));
exports.serve = series(serve, parallel(sassTask));
