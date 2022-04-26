const { src, dest, parallel, watch, series } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create();

// Files Path
const FilesPath = {
  sassFiles: "src/sass/*.sass",
  pugFiles: "src/pug/pages/*.pug",
};

const { sassFiles, pugFiles } = FilesPath;

// Sass task
function sassTask() {
  return src(sassFiles)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("style.css"))
    .pipe(dest("assets/css"))
    .pipe(browserSync.stream());
}

/** Pug Task */
function pugTask() {
  return src(pugFiles)
    .pipe(pug({ pretty: true }))
    .pipe(dest("./"))
    .pipe(browserSync.stream());
}

/** Watch Task */

function serve() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 3000,
  });

  watch(sassFiles, sassTask);
  watch(pugFiles, pugTask);
}

/* Browser-sync
 * ------------ */
function brsSync(done) {
  browserSync.init({
    server: {
      baseDir: options.browserSync.baseDir,
    },
    port: 3000,
  });
  done();
}

// function clean() {
//   return del(["assets"]);
// }
exports.sass = sassTask;
exports.pug = pugTask;
// exports.clean = clean;
exports.default = series(parallel(pugTask, sassTask));
exports.serve = series(serve, parallel(pugTask, sassTask));
