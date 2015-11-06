/***********************************************************
/*		Required
/***********************************************************/

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename');

/***********************************************************
/*		Styles Task
/***********************************************************/
gulp.task('styles', function(){
	gulp.src('scss/**/*.scss')
	.pipe(sass(/*{outputStyle: 'compressed'}*/).on('error', sass.logError))
	.pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest('css'))
	.pipe(reload({stream:true}));
});
/***********************************************************
/*		Scripts Task
/***********************************************************/
gulp.task('scripts', function(){
	gulp.src(['js/**/*.js', '!js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('js'))
	.pipe(reload({stream:true}));
});

/***********************************************************
/*		HTML Tasks
/***********************************************************/
gulp.task('html', function(){
	gulp.src('**/*.html')
	.pipe(reload({stream:true}));
});

/***********************************************************
/*		Browser-Sync Tasks
/***********************************************************/
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir:'./'
		}
	});
});
/***********************************************************
/*		Watch Task
/***********************************************************/

gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['styles']);
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('**/*.html', ['html']);
});
/***********************************************************
/*		Default Task
/***********************************************************/
gulp.task('default', [ 'styles', 'scripts', 'browser-sync' , 'watch']);