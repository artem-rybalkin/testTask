var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
 
gulp.task('sass', function () {
  return gulp.src('sass/style1.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	gulp.watch('sass/style1.scss', ['sass']);
});