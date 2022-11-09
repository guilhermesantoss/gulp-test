const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const count = require('gulp-count');

function build_development() {
  return src('src/*.js')
    .pipe(concat('bundle.js'))
    .pipe(dest('dist/'))
    .pipe(count("## files normal", { logFiles: true }))
    .pipe(babel({
      presets: [
        [
          "@babel/env", { modules: false }
        ]
      ]
    }))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/'))
    .pipe(count("## files minified", { logFiles: true }));
}

exports.default = series(build_development);
