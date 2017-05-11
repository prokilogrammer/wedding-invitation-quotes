var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    nodemon = require('gulp-nodemon'),
    pump = require('pump');

var sourceJs = path.join(__dirname, "www", "js");
var sourceCss = path.join(__dirname, "www", "css");
var buildOutput = path.join(__dirname, "www", "static");

gulp.task("buildJs", function(cb) {

    pump([
         gulp.src([
             sourceJs + "/index.js"]),
         concat("index.js"),
         gulp.dest(path.join(buildOutput, "js"))
     ], cb);
});

gulp.task("buildCss", function(cb) {
    pump([
        gulp.src(path.join(sourceCss, "main.sass")),
        sass(),
        gulp.dest(path.join(buildOutput, "css"))
    ], cb)
});

// Watch frontend files
gulp.task("watch-js", function() {
    return gulp.watch(path.join(sourceJs, "**/*.js"), ["buildJs"]);
});

// Watch frontend files
gulp.task("watch-css", function() {
    return gulp.watch(path.join(sourceCss, "**/*.sass"), ["buildCss"]);
});

gulp.task('nodemon-server', function() {
    return nodemon({
        script: 'app.js',
        ext: 'js',
        ignore: ['gulpfile.js', "www/*"]
    })
});

gulp.task("build", ["buildJs", "buildCss"]);
gulp.task('dev', ['build', 'watch-js', 'watch-css', 'nodemon-server']);

