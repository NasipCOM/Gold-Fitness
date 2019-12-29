var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');

gulp.task('img', function () {
	gulp.src('assets/images1/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/imgages'))
});
gulp.task('imgage', function () {
	gulp.src('assets/images1/*/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/imgages'))
});



  gulp.task('css', function () {
  gulp.src('./assets/css/style.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./assets/mincss/'));
});