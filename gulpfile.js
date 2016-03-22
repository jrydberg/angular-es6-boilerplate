var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var plugins = require('gulp-load-plugins')();

var src = {
	html: 'src/**/*.html',
	css: 'src/**/*.css',
	scripts: {
		all: 'src/scripts/**/*.js',
		app: 'src/scripts/app.js'
	}
};

var build = 'build/';
var out = {
	scripts: {
		file: 'app.js',
		folder: build + 'scripts/'
	},
}

// Copy dependencies to build/node_modules/ 
gulp.task('dependencies', function() {
  gulp.src(plugins.npmFiles(), {base:'./'}).pipe(gulp.dest('./build'));
});

gulp.task('html', function() {
	return gulp.src(src.html)
		.pipe(gulp.dest(build))
		.pipe(plugins.connect.reload());
});

gulp.task('css', function() {
	return gulp.src(src.css)
		.pipe(gulp.dest(build))
		.pipe(plugins.connect.reload());
});

// The jshint task runs jshint with ES6 support
gulp.task('jshint', function() {
	return gulp.src(src.scripts.all)
		.pipe(plugins.jshint({
			esnext: true
		}))
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});

// Compile all script files into one output minified JS file.
gulp.task('scripts', ['jshint'], function() {

	var sources = browserify({
		entries: src.scripts.app,
		debug: true // Build source maps
	})
	.transform(babelify.configure({
		"presets": [ "es2015" ]
	}));

	return sources.bundle()
		.pipe(vinylSourceStream(out.scripts.file))
		.pipe(vinylBuffer())
		.pipe(plugins.sourcemaps.init({
			loadMaps: true // Load the sourcemaps browserify already generated
		}))
		.pipe(plugins.sourcemaps.write('./', {
			includeContent: true
		}))
		.pipe(gulp.dest(out.scripts.folder))
		.pipe(plugins.connect.reload());

});

gulp.task('serve', ['build', 'watch'], function() {
	plugins.connect.server({
		root: build,
		port: 4242,
		livereload: true,
		fallback: build + 'index.html'
	});
});


gulp.task('watch', function() {
	gulp.watch(src.html, ['html']);
	gulp.watch(src.css, ['css']);
	gulp.watch(src.scripts.all, ['scripts']);
})

gulp.task('build', [ 'dependencies', 'scripts', 'html', 'css' ]);
gulp.task('default', ['serve']);
