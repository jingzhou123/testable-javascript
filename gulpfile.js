var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var watch = require('gulp-watch');


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch('./src/**/*.*', browserSync.reload);
});

gulp.task('default', ['browserSync']);
