const { src, dest, parallel, watch, series } = require("gulp"),
  concat = require("gulp-concat"),
  scss = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  browserSync = require("browser-sync").create();

const FilesPath = {
  scssFiles: "src/sass/**/*.scss",
  pugFiles: "src/pug/pages/*.pug",
  assetsFile: "assets/**/*",
};

const { scssFiles, pugFiles, assetsFile } = FilesPath;

function scssTask() {
  return src(scssFiles)
    .pipe(scss())
    .pipe(concat("style.css"))
    .pipe(dest("./dist/css"))
    .pipe(browserSync.stream());
}

function pugTask() {
  return src(pugFiles)
    .pipe(pug({ pretty: true }))
    .pipe(dest("./dist"))
    .pipe(browserSync.stream());
}

function assetsTask() {
  return src(assetsFile).pipe(dest("./dist/assets"));
}

function serve() {
  browserSync.init({ server: { baseDir: "./dist" } });
  watch(scssFiles, scssTask);
  watch("src/pug/**/*.pug", pugTask);
  watch(assetsFile, assetsTask);
}

exports.scss = scssTask;
exports.pug = pugTask;
exports.assets = assetsTask;
exports.default = series(parallel(pugTask, scssTask, assetsTask));
exports.serve = series(serve, parallel(pugTask, scssTask, assetsTask));
