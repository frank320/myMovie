/**
 * Created by Frank.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('script', function () {
  gulp.src(['./**/*.js', '!./assets/**/*.js', '!./node_modules/**/*.js', '!./gulpfile.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});