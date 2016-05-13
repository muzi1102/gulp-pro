// import
var gulp=require('gulp'),
	browserSync=require('browser-sync'),
	sass=require('gulp-sass'),
	runSequence=require('run-sequence'),
	// useref=require('gulp-useref'),
	autoprefixer=require('gulp-autoprefixer')
	// uglify=require('gulp-uglify'),
	// cssnano=require('gulp-cssnano'),
	// imagemin=require('gulp-imagemin'),
	// cache=require('gulp-cache')
	// rename=require('gulp-rename'),
	// concat=require('gulp-concat')


//gulp.task
gulp.task('hello',function(){
	console.log('hello gulp')
}) 
//start browersync server
gulp.task('browserSync',function(){
	browserSync({
		server:{
			baseDir:'app'
		}
	})
})
// sass
gulp.task('sass',function(){
	return gulp.src('app/sass/**/*.scss')
		.pipe(sass({outputStyle:"expanded"}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream:true
		}))
})
// watch
gulp.task('watch',function(){
	gulp.watch('app/sass/**/*.scss',['sass']);
})

// image
// gulp.task('images',function(){
// 	return gulp.src(('app/img/**/*.+(png|jpg|gif|svg)'))
// 		.pipe(cache(imagemin({
// 			interlaced:true
// 		})))
// 		.pipe(gulp.dest('dist/img'))
// })
// Optimizing CSS and JavaScript 
// gulp.task('useref',function(){
// 	return gulp.src('app/*.html')
// 		.pipe(useref())
// 		.pipe(gulp.dest('dist'))
// })
// Build Sequences
gulp.task('default',function(callback){
	runSequence(['sass','browserSync','watch'])
})
// gulp.task('build',function(callback){
// 	runSequence(
// 		// 'clean:dist',
// 		['sass','useref'],
// 		callback
// 	)
// })