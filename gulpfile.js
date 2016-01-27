var browserSync = require('browser-sync').create();
var gulp        = require('gulp');
var gutil = require('gulp-util'); var newer = require('gulp-newer');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var webpack = require('webpack');

var webpackConfig = require('./webpack.config');
var devCompiler = webpack(webpackConfig);
var htmlTask;

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "build"
    }
  });
});

htmlTask = function () {
  return gulp.src('src/**/*.html')
  .pipe(newer('build'))
  .pipe(gulp.dest('build'))
  .pipe(browserSync.stream());
};

gulp.task('html', htmlTask);

gulp.task('watch:html', function () {
  watch('src/**/*.html', htmlTask);
});

gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('webpack:watch', function(callback) {
  var initialCompile = false;

  webpack(webpackConfig).watch(200, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));

    browserSync.reload();
    // On the initial compile, let gulp know the task is done
    if(!initialCompile) {
      initialCompile = true;
      callback();
    }
  });
});

gulp.task('watch', ['watch:html', 'webpack:watch']);

gulp.task('serve', function (done) {
  runSequence('html', 'browserSync', 'watch', done);
});

gulp.task('default', ['serve']);
