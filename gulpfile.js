const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('compile', function() {
    gulp.src('index.scss')
        .pipe(sass().on('error', console.log))
        .pipe(gulp.dest('./'))
})

gulp.task('default', function () {
    gulp.watch('index.scss', ['compile'])
})