/*
* @Author: Marte
* @Date:   2017-11-06 09:22:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-06 09:46:49
*/
//全局下载
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var yscss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
//html压缩
gulp.task('yshtml',function(){
    gulp.src('./index.html')
    .pipe(htmlmin({
        removeCommentts:true,
        collapesWhitespace:true,
        removeScriptTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true
        }))
    .pipe(gulp.dest('html'));
})

//压缩js
gulp.task('ysjs',function(){
    gulp.src('./*js').pipe(uglify()).pipe(gulp.dest('js'))
})

//压缩css
gulp.task('yscss',function(){
    gulp.src('./*css').pipe(yscss()).pipe(gulp.dest('css'))
})
