import fileInclude from "gulp-file-include";

export const html = () => {
	return app.gulp.src(app.path.src.html) //получили файлы
		.pipe(fileInclude())
		.pipe(app.gulp.dest(app.path.build.html)) //перенесли файлы
}