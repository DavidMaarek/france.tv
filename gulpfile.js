/**
 * Created by davidmaarek on 15/06/2017.
 */

var gulp = require("gulp");

var sass = require("gulp-sass"),
    livereload = require('gulp-livereload');


gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('scss/*.scss', ['sass']).on('change', function(event){
        console.log('Le fichier ' + event.path + ' a ete compile');
    })
});