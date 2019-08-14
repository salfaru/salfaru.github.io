//gulp clean - очистка продакшена
//gulp build - созданиме продакшена
//В билде используется SASS, сжатие картинок, слияние и минификация CSS, слияние и сжатие JS и библиотек LIBS. Таже включен autoprefixer.
//Установлена jQuery.

// Переменные
var gulp     = require('gulp'),
	sass     = require('gulp-sass'),
	bSync    = require('browser-sync'),
	concat   = require('gulp-concat')
	uglify   = require('gulp-uglifyjs'),
	cssNano  = require('gulp-cssnano'),
	rename	 = require('gulp-rename'),
	clean	 = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	autopref = require('gulp-autoprefixer');

//Реакция на изменения SASS, HTML, JS
gulp.task('default', ['sass', 'bSync', 'scripts', 'cssNano'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', bSync.reload);
	gulp.watch('app/js/*.js', bSync.reload);
});

//Комплификация и сжатие CSS файлов из аддонов подключенныйх в app/css/libs.css
gulp.task('cssNano', function() {
	return gulp.src('app/css/libs.css')
			   .pipe(cssNano())
			   .pipe(rename({suffix: '.min'}))
			   .pipe(gulp.dest('app/css/'))
})

//Обработка файлов SASS и autoprefixer
gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
			   .pipe(sass())
			   .pipe(autopref(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
			   .pipe(gulp.dest('app/css/'))
			   .pipe(bSync.reload({stream: true}))
});

//Комплификация и минимизация JS файлов из аддонов
gulp.task('scripts', function() {
	return gulp.src('app/libs/jquery/dist/jquery.min.js')
			   .pipe(concat('libs.min.js'))
			   .pipe(uglify())
			   .pipe(gulp.dest('app/js'))
})

//Создание живого обновления страницы
gulp.task('bSync', function() {
	bSync({
		server: {baseDir: 'app'},
		notify: false
	});
});

//Очистка папки DIST
gulp.task('clean', function() {
	return clean.sync('dist')
});

//Сжатие картинок и выгрузка их в DIST/IMG
gulp.task('img', function() {
	return gulp.src('app/img/**/*')
			   .pipe(imagemin({
			   		interlaced: true,
			   		progressive: true,
			   		svgoPlugins: [{removeViewBox: false}],
			   		une: [pngquant()]
			   }))
			   .pipe(gulp.dest('dist/img'))
});

//Билдинг итоговой версии
gulp.task('build',['clean','img' , 'sass', 'scripts'], function() {
	var img   = gulp.src('app/img/**/*').pipe(gulp.dest('dist/img')),
		fonts = gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts')),
		css   = gulp.src('app/css/*.css').pipe(gulp.dest('dist/css')),
		js    = gulp.src('app/js/**/*').pipe(gulp.dest('dist/js')),
		html  = gulp.src('app/*.html').pipe(gulp.dest('dist'));
});