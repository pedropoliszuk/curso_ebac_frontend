const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function dizEae(callback) {
    setTimeout(function() {
        console.log("EAE GULP");
        callback();
    }, 1000)
}

exports.default = gulp.parallel(dizEae);
exports.sass = compilaSass;
exports.javascript = comprimeJS;
exports.images = comprimeImagens;