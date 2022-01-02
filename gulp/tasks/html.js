import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
	return app.gulp.src(app.path.src.html) //получили файлы
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError ({
			title: "HTML",
			message: "Error: <%= error.message %>",
		})
	))
		.pipe(fileInclude()) //запуск плагина
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(webpHtmlNosvg())
		.pipe(versionNumber({
			'value': '%DT%',
			'append': {
				'key': '_,v',
				'cover': 0,
				'to': [
					'css',
					'js',
				]
			},
			'output': {
				'file': 'gulp/versionNumber.json'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.html)) //перенесли файлы
		.pipe(app.plugins.browsersync.stream());
}