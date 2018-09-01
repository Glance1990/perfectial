//Include required modules
var gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream"),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();
;

var paths = {
    css:["./src/scss/*.scss"],
    script:["./src/js/*.js"]
};

gulp.task("watcher", function(){
    gulp.watch(paths.css, ["buildScss"]);
    gulp.watch(paths.script, ["buildJs"]);
});


// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch(paths.script, ["buildJs"]);
    gulp.watch(paths.css, ["buildScss"]);

    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);


//Convert ES6 ode in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task("buildJs", function(){
    return browserify({
        entries: ["./src/js/index.js"]
    })
        .transform(babelify.configure({
            presets : ["es2015"]
        }))
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./js"))
        ;
});

gulp.task("buildScss", function () {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css"))
});