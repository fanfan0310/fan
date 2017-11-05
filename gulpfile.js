//公用代码
var gulp = require('gulp');
    htmlmin = require('gulp-htmlmin');
    minimg = require('gulp-imagemin');
    uglify = require('gulp-uglify');
    yscss = require('gulp-minify-css')
//压缩html代码
gulp.task('yshtml',function(){
     gulp.src('./index.html')
         .pipe(htmlmin({
                removeComments:true,
                collapseWhitespace:true,
                removeScriptTypeAttributes:true,
                minifyJS:true,
                minifyCSS:true
            }))
         .pipe(gulp.dest('html'))
})
gulp.task('ysimage',function(){
    console.log(2222222)
    gulp.src('./*.gif')
        .pipe(minimg({
            optimizationLevel: 1, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('img'))
})
gulp.task('ysjs',function(){
    console.log(3333333)
    gulp.src('./*.js').pipe(uglify()).pipe(gulp.dest('js'))
});
gulp.task('yscss',function(){
        console.log(44444)
    gulp.src(['./*/*.css','./*.css']).pipe(yscss()).pipe(gulp.dest('css'))
})
gulp.task('default',['yshtml','ysimage','ysjs','yscss']);

//编译scss
var babel = require('gulp-babel');
    rename = require('gulp-rename');
    gulp.task('cles6',function(){
        gulp.src('./*.js')
        .pipe(babel({
                presets:['es2015']
            }))
        .pipe(rename({suffix:'build_es6'}))
        .pipe(gulp.dest('build/build_ES6'))
})

var concat = require("gulp-concat");
gulp.task('concatcss',function(){
    gulp.src('./**/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('cssss'))
})

gulp.task('concatjs',function(){
    gulp.src('./*.css')
    .pipe(concat('aa.js'))
    .pipe(gulp.dest('newjs'))
})

gulp.task('conjs',function(){
    gulp.src('./*/**js').pipe(concat('all.js')).pipe(gulp.dest(conjs))
})