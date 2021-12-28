const { src, dest, watch, series } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function buildStyle(){
    return src('sky/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

function watchTack(){
    watch(['sky/**/*.scss'],buildStyle);
}

exports.default = series(buildStyle,watchTack);
