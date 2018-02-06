// Aquí se importarán los plugins necesarios.
// La dependencia imprescindible es gulp.
const gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat_css = require('gulp-concat-css'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'), //Compresor de imágenes
	imageminPngcrush = require('imagemin-pngcrush'), //Optimiza las imágenes .PNG
	watch = require('gulp-watch'); //Sirve para mantener vigilando los cambios de una tarea

var outdir_css = "./css";
// Se irán definiendo las tareas una a una
gulp.task('css', () =>  
  	gulp.src([
  		'./sass/*.scss'
  		])
    .pipe(sass({outputStyle: 'compressed'}))
    // .pipe(rename({ suffix: '.min' }))
    .pipe(concat_css('main.css'))
    .pipe(gulp.dest(outdir_css))
);

gulp.watch('./sass/*.scss', ['css']);