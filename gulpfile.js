const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

exports.default = function() {
  return src('src/*.js')
    .pipe(concat('bundle.js'))
    .pipe(dest('dist/'))
    .pipe(babel({
      presets: [
        [
          "@babel/env", { modules: false }
        ]
      ]
    }))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/'));
}
