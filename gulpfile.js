'use strict';

var gulp = require('gulp'),
    image = require('gulp-image'),
    autoprefixer = require('gulp-autoprefixer'),
    preprocess = require('gulp-preprocess'),
    less = require('gulp-less'),
    env = require('gulp-env'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    copy = require('gulp-copy');


var params = {
    build: {
        dev: {
            html: 'build/dev/',
            js: 'build/dev/js/',
            css: 'build/dev/css/',
            img: 'build/dev/img/',
            settings: {
                NODE_ENV: 'dev'
                // preprocess settings
            }
        },
        prod: {
            html: 'build/prod/',
            js: 'build/prod/js/',
            css: 'build/prod/css/',
            img: 'build/prod/img/',
            settings: {
                NODE_ENV: 'prod'
                // preprocess settings
            }
        }
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/app.js',
        style: 'src/less/build.less',
        img: 'src/img/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.less',
        img: 'src/img/**/*.*'
    }
};


// Сборка html файлов

gulp.task('html-dev:build', function () {
    gulp.src(params.src.html)
        .pipe(preprocess({context: params.build.dev.settings}))
        .pipe(gulp.dest(params.build.dev.html))
});

gulp.task('html-prod:build', function () {
    gulp.src(params.src.html)
        .pipe(preprocess({context: params.build.prod.settings}))
        .pipe(gulp.dest(params.build.prod.html))
});

//-------------


// Сборка less файлов

gulp.task('styles-dev:build', function () {
    gulp.src(params.src.style)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 55 versions'],
            cascade: false
        }))
        .pipe(rename("styles.css"))
        .pipe(gulp.dest(params.build.dev.css))
});

gulp.task('styles-prod:build', function () {
    gulp.src(params.src.style)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 55 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest(params.build.prod.css))
});

//-------------


// Сборка js файлов

gulp.task('js-dev:build', function () {
    gulp.src(params.src.js)
        .pipe(gulp.dest(params.build.dev.js))
});

gulp.task('js-prod:build', function () {
    gulp.src(params.src.js)
        .pipe(uglify())
        .pipe(gulp.dest(params.build.prod.js))
});

//-------------


// Обработка изображений

gulp.task('image-prod:build', function () {
    gulp.src(params.src.img)
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            advpng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true
        }))
        .pipe(gulp.dest(params.build.prod.img));
});

//-------------


/*
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
});*/


gulp.task('build-dev', [
    'html-dev:build',
    'js-dev:build',
    'styles-dev:build',
    //'image-dev:build'
]);


gulp.task('default', ['build']);