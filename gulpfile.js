const {src, dest, task} = require('gulp');
const sass = require('gulp-sass');

const rm = require( 'gulp-rm' );
task( 'clean', function() {
  return src( 'dist/**/**/*', { read: false })
    .pipe( rm() )
});

function copy() {
  return src('src/css/main.scss').pipe(dest('dist'))
};
task( 'styles', function() {
  return src( 'src/css/**/*.scss'.pipe(dest('dist'))
});


exports.copy = copy