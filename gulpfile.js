
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const GulpPug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const notify = require("gulp-notify");
const minify = require('gulp-minify');

gulp.task('html',function(){
    return gulp.src('stage/html/*.pug')
     .pipe(sourcemaps.init())
     .pipe(GulpPug({pretty: true}))
     .pipe(sourcemaps.write('.'))
     .pipe(gulp.dest('dist'))
     
 });

gulp.task('css',function(){
    return gulp.src(['stage/css/**/*.scss','stage/css/**/*.css'])
     .pipe(sourcemaps.init())
     .pipe(sass({outputStyle: "compressed"}))
     .pipe(autoprefixer())
     .pipe(concat('main.css'))
     .pipe(sourcemaps.write('.')) //في مكان جنب المكان الي انا عملت فيه كونكات دي فكره الدوت
     .pipe(gulp.dest('dist/css'))
     
 });
 gulp.task('js',function(){
    return gulp.src('stage/js/**/*.js')
     .pipe(concat('main.js'))
     .pipe(minify())
     .pipe(gulp.dest('dist/js'))
     
 });
 gulp.task('watch',function(){
    gulp.watch(['stage/html/**/*.pug','stage/css/**/*.css','stage/css/**/*.scss','stage/js/**/*.js'],gulp.series('html','css','js'))
});