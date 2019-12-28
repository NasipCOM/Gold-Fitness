var gulp = require('gulp');
// var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

// gulp.task('scss', function () {
//     return gulp.src('./assets/scss/*.scss')
//       .pipe(sass().on('error', sass.logError))
//       .pipe(gulp.dest('./css1'));
//   });


  gulp.task('css', function () {
  gulp.src('./assets/css/style.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./assets/mincss/'));
});