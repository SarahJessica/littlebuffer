var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var browser = require('browser-sync');
// var del = require('del');

var paths = {
	temp: 'temp',
	tempVendor: 'temp/vendor',
	tempIndex: 'temp/index.html',

	index: 'app/index.html',
	appSrc: 'app/**/*',
	bowerSrc: 'bower_components/**/*'
};

gulp.task('default', ['watch']);

gulp.task('watch', ['serve'], function () {
	gulp.watch(paths.appSrc, ['scripts']);
	gulp.watch(paths.bowerSrc, ['vendors']);
});

gulp.task('serve', ['vendors'], function () {
	return gulp.src(paths.temp)
		.pipe(webserver({
			livereload: true,
      proxies: [{source: '/api', target: 'http://localhost:1337'}]
		}));
});

gulp.task('vendors', ['copyVendor', 'scripts'], function () {

	var tempVendors = gulp.src(paths.tempVendor + '/**/*', {
		read: false
	});

	return gulp.src(paths.tempIndex)
		.pipe(inject(tempVendors, {
			relative: true,
			name: 'vendorInject'
		}))
		.pipe(gulp.dest(paths.temp));
});

gulp.task('copyVendor', function () {
	return gulp.src(mainBowerFiles()).pipe(gulp.dest(paths.tempVendor));
});

gulp.task('scripts', ['copyApp'], function () {

	var appFiles = gulp.src('temp/*', {
		read: false
	});

	return gulp.src(paths.tempIndex)
		.pipe(inject(appFiles, {
			relative: true
		}))
		.pipe(gulp.dest(paths.temp));
});

gulp.task('copyApp', function () {
	return gulp.src(paths.appSrc).pipe(gulp.dest(paths.temp));
});

gulp.task('refresh', function(cb) {
	run('serve', 'reload', cb);
});
gulp.task('reload', function(){
	return browser.reload();
});

// gulp.task('clean', function (cb) {
// 	del([paths.temp], cb);
// });
