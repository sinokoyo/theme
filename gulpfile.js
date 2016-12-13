'use strict';

const gulp		= require('gulp');
const watch		= require('gulp-watch');
const sass		= require('gulp-sass');
const plumber	= require('gulp-plumber');
const bsync		= require('browser-sync');



gulp.task('default',  ()=>{
	console.log('gulp');
	gulp.start('watch');
});

gulp.task('watch', function(){
	watch('sass/**/*.sass', function(){
	gulp.start('style');
	});
});

gulp.task('style', ()=>{
	return gulp.src('sass/**/*.sass')
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest('./'));
});
