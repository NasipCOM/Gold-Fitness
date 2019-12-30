var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');
var nunjucks = require('gulp-nunjucks-html');

gulp.task('img', async function () {
	gulp.src("assets/images_original/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest('assets/images'))
});
gulp.task('image', async function () {
	gulp.src("assets/images_original/*")
		.pipe(imagemin())
		.pipe(gulp.dest('assets/images'))
});

gulp.task('css', async function () {
  gulp.src('./assets/css/style.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./assets/mincss/'));
});

gulp.task('default', gulp.parallel('css', 'img', 'image'));