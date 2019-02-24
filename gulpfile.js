const {src, dest, task} = require('gulp');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const rm = require( 'gulp-rm' );
const concat = require('gulp-concat');

const browserSync = require('browser-sync').create();

task( 'clean', function() {
  return src( 'dist/**/*', { read: false })
    .pipe( rm() )
});

(
  function copy() {
    return src('src/css/main.scss').pipe(dest('dist'))
  };)

const styles = [
  'node_modules/normalize.css/normalize.css',
  'src/css/main.scss'
];

task('styles', function() {
  //return src( 'src/css/main.scss')
  return src('src/css/main.scss')
  .pipe(concat('main.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('dist'));
});
task('server', function() {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
});

exports.copy = copy
watch('src/css/**/*.scss', series('styles'));
task('default', series('clean', 'styles'));
