import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; //Сжатие css файла
import webpcss from 'gulp-webpcss'; //вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; //Добавление вендорных префиксов
import groupCssMediaQuaries from 'gulp-group-css-media-queries'; //Группировка медиа запросов



const sass = gulpSass(dartSass);


export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: true })

		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCSS",
				message: "Error: <%= error.message %>",
			})))

		.pipe(app.plugins.replace(/@img\//g, '../img/'))

		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(groupCssMediaQuaries())
		.pipe(webpcss({
			webpClass: ".webp",
			noWebpClass: ".no-webp"
		}))
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserlist: ["last 3 versions"],
			cascade: true
		}))
		//Раскоментировать если нужен не сжатый дубль файла стилей
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		.pipe(rename({
			extname: ".min.css"
		}))

		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
}